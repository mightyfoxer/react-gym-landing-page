import Content from "@/components/content";
import Footer from "@/components/footer";
import Modal from "../components/Modal";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Home() {
  return (
    <main className="flex-col bg-[#131313] w-[99vw] ">
      <Content />
      {/* <Element name="Contact" className="element"> */}
      <Footer />
    </main>
  );
}
