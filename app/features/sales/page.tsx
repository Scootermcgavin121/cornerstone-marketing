import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SalesFeatures from "../../components/SalesFeatures";

export const metadata = {
  title: "Sales & Pricing Features — Cornerstone Builder Software",
  description:
    "Real-time pricing matrices, branded PDF price sheets, promotions & incentives, design center selections, and Excel export. Everything your sales team needs to close deals.",
  openGraph: {
    title: "Sales & Pricing Features — Cornerstone Builder Software",
    description:
      "Real-time pricing matrix, PDF price sheets, promotions, design center selections, and more. Included with the Purchasing add-on at $99.98/month total.",
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
