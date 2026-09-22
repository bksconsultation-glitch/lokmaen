import Link from "next/link";
import { CATEGORIES, PRICING } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand"><span className="brand-mark">IP</span><span>ITTIHAD PRO</span></Link>
          <div className="nav-links">
            <a href="#pole">Le Pôle</a><a href="#categories">Catégories</a><a href="#pricing">Tarifs</a>
          </div>
          <Link href="/inscription" className="cta" style={{marginTop:0,padding:"11px 16px"}}>S'inscrire</Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="kicker">Aïn Smara · Constantine</div>
              <h1>Former le joueur. Construire l'homme.</h1>
              <p className="lead">ITTIHAD PRO – Pôle d'Excellence accompagne les jeunes joueurs dans leur développement sportif, éducatif et humain avec une méthodologie structurée.</p>
              <Link href="/inscription" className="cta">S'inscrire maintenant →</Link>
            </div>
            <div className="hero-card">
              <span className="pill">Inscriptions ouvertes</span>
              <div className="price">{PRICING.pack.toLocaleString("fr-FR")} DA <small>/ pack</small></div>
              <p className="muted">Pack de départ selon la grille tarifaire fournie.</p>
              <ul className="list">
                <li>Équipement sportif</li>
                <li>Encadrement technique</li>
                <li>Suivi des jeunes catégories</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="pole">
          <div className="container">
            <div className="kicker">Le Pôle</div>
            <h2>Une formation sportive et éducative.</h2>
            <p className="lead">Le Pôle de Formation Sportive Union Pro est une académie spécialisée dans la formation et le développement des jeunes catégories à Aïn Smara. Fondé fin 2025, son objectif est de former un joueur complet sur les plans sportif, éducatif et moral, avec un encadrement administratif et technique qualifié.</p>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="kicker">Catégories</div>
            <h2>Choisissez la catégorie adaptée.</h2>
            <div className="grid-4">
              {CATEGORIES.map(c => <div className="card" key={c.code}><div className="category">{c.label}</div><div className="muted">Nés en {c.years}</div></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="kicker">Tarification</div>
            <h2>Une offre simple et lisible.</h2>
            <div className="offer-grid">
              <div className="card"><span className="pill">Pack</span><h3>{PRICING.pack.toLocaleString("fr-FR")} DA</h3><p className="muted">Paiement du pack.</p></div>
              <div className="card"><span className="pill">Mensuel</span><h3>{PRICING.monthly.toLocaleString("fr-FR")} DA</h3><p className="muted">Selon la grille tarifaire fournie.</p></div>
              <div className="card"><span className="pill">2 mois</span><h3>{PRICING.monthlyTwoPayments.toLocaleString("fr-FR")} DA</h3><p className="muted">1 500 DA × 2.</p></div>
            </div>
            <div className="card" style={{marginTop:16}}>
              <strong>Option indiquée sur la feuille : {PRICING.optionalTwoPayments.toLocaleString("fr-FR")} DA</strong>
              <p className="muted">500 DA × 2 — optionnelle. Le libellé manuscrit n'étant pas entièrement lisible, il peut être modifié dans <code>lib/constants.ts</code>.</p>
            </div>
            <Link href="/inscription" className="cta">Commencer l'inscription →</Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="kicker">Contact</div>
            <h2>Prêt à inscrire votre enfant ?</h2>
            <p className="lead">📍 Aïn Smara – Constantine · 📞 0555 45 70 40</p>
            <p className="muted">Facebook : ittihad pro – PÔLE OF EXCELLENCE · Instagram : ittihadpro_irbas</p>
            <Link href="/inscription" className="cta">S'inscrire maintenant</Link>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container">© 2026 ITTIHAD PRO – Pôle d'Excellence</div></footer>
    </>
  );
}