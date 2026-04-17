import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConstructionFeatures from "../../components/ConstructionFeatures";

export const metadata = {
  title: "Construction Scheduling Features — Cornerstone Builder Software",
  description:
    "Smart scheduling with Gantt charts, drag-and-drop dependencies, vendor management, cascade notifications, customer portals, and more. Built for residential home builders.",
  openGraph: {
    title: "Construction Scheduling Features — Cornerstone Builder Software",
    description:
      "Smart scheduling with Gantt charts, vendor management, cascade notifications, and customer portals. Starting at $79.99/month.",
    url: "https://cornerstonepm.ai/features/construction",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

export default function ConstructionFeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ConstructionFeatures />
      </main>
      <Footer />
    </>
  );
}
