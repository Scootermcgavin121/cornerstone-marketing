import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PurchasingFeatures from "../../components/PurchasingFeatures";

export const metadata = {
  title: "Purchasing & Design Center Features — Cornerstone Builder Software",
  description:
    "Parts catalog, budget hierarchy, bid management, bid comparison, design center, spec levels, change orders, purchase orders, and Buildertrend migration. 8x cheaper than the competition.",
  openGraph: {
    title: "Purchasing & Design Center Features — Cornerstone Builder Software",
    description:
      "Complete purchasing, bid management, and design center for home builders. Budget hierarchy, bid comparison, spec levels, change orders, and more. Starting at $39.99/month.",
    url: "https://cornerstonepm.ai/features/purchasing",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

export default function PurchasingFeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PurchasingFeatures />
      </main>
      <Footer />
    </>
  );
}
