import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SalesFeatures from "../../components/SalesFeatures";

export const metadata = {
  title: "Sales & Pricing Features — Cornerstone Builder Software",
  description:
    "Create a new home sale in under 60 seconds. Automated 9-step pipeline, auto-budget generation, permitting handoff, pricing matrices, and promotions. The complete sales-to-construction workflow.",
  openGraph: {
    title: "Sales & Pricing Features — Cornerstone Builder Software",
    description:
      "60-second home sales, automated budgets, 9-step pipeline, permitting handoff, pricing matrix, and promotions. Included with the Purchasing add-on at $99.98/month total.",
    url: "https://cornerstonepm.ai/features/sales",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

export default function SalesFeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SalesFeatures />
      </main>
      <Footer />
    </>
  );
}
