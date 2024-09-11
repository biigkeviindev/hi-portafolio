import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Profile } from "@/components/Profile";
import Contact from "@/components/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <section>
      <About />
      <Experience />
      <Projects />
      <Profile />
      <Contact />
      <ToastContainer />
    </section>
  );
}
