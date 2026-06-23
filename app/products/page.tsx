import Marketplace from "@/components/Marketplace";
import ProductsNavbar from "@/components/ProductsNavbar";

export const metadata = {
  title: "AI Products — Spark Ventures",
  description:
    "Pick the market you know. We built the software for it. Every product below is live, tested, and ready to take to customers.",
};

export default function ProductsPage() {
  return (
    <main className="bg-white text-navy">
      <ProductsNavbar />
      <Marketplace />
    </main>
  );
}