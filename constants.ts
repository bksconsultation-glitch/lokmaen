export const CATEGORIES = [
  { code: "U7", label: "U7", years: "2019 – 2020" },
  { code: "U9", label: "U9", years: "2017 – 2018" },
  { code: "U11", label: "U11", years: "2015 – 2016" },
  { code: "U13", label: "U13", years: "2013 – 2014" }
] as const;

// Prices transcribed from the client's handwritten sheet.
// The labels are intentionally kept editable because the handwriting
// contains abbreviated Arabic labels.
export const PRICING = {
  pack: 6000,
  monthly: 1500,
  monthlyTwoPayments: 3000,
  optionalTwoPayments: 1000
};