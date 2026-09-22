-- ITTIHAD PRO registration database
-- Run this in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  first_name text not null,
  last_name text not null,
  date_of_birth date not null,
  place_of_birth text not null,
  category text not null check (category in ('U7','U9','U11','U13')),
  address text not null,
  guardian_name text not null,
  relationship text not null,
  phone text not null,
  second_phone text,
  has_illness_or_allergy boolean not null default false,
  health_details text,
  documents jsonb not null default '[]'::jsonb,
  status text not null default 'new' check (status in ('new','contacted','confirmed','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists registrations_category_idx on public.registrations(category);
create index if not exists registrations_created_at_idx on public.registrations(created_at desc);
create index if not exists registrations_name_idx on public.registrations(last_name, first_name);

alter table public.registrations enable row level security;

-- Public clients do not get SELECT/UPDATE/DELETE access.
-- The Next.js server uses SUPABASE_SERVICE_ROLE_KEY for controlled operations.

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists registrations_updated_at on public.registrations;
create trigger registrations_updated_at
before update on public.registrations
for each row execute function public.set_updated_at();

-- Storage bucket for registration documents.
insert into storage.buckets (id, name, public)
values ('registration-documents', 'registration-documents', false)
on conflict (id) do nothing;

-- IMPORTANT:
-- Keep the bucket private. The server uploads files using the service role.
-- Do not expose SUPABASE_SERVICE_ROLE_KEY to the browser.