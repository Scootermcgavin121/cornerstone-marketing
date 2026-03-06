import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturesDetail from "../components/FeaturesDetail";

export const metadata = {
  title: "Features — Cornerstone Builder Software",
  description:
    "Every feature included. Scheduling, vendor portal, Gantt charts, inspections, templates, messaging, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturesDetail />
      </main>
      <Footer />
    </>
  );
}
