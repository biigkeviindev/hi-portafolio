import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Profile } from "@/components/Profile";
import Contact from "@/components/Contact";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogRocket from "logrocket";
import Head from "next/head";

const listProdSites = ["http://www.hikevindev.es/"];

export default function Home() {
  //Init register site
  // if (listProdSites.includes(window.location.origin)) {
  //   LogRocket.init("onp7ck/hikevindev");
  // }

  return (
    <section>
      <Head>
        <title>Desarrollo de Aplicaciones Móviles y Web</title>
        <meta
          name="description"
          content="Programador web freelance especializado en desarrollo de aplicaciones móviles y sitios web a medida. Contacta para un desarrollo personalizado y eficiente."
        ></meta>
        <meta
          name="keywords"
          content="Programador web freelance, Desarrollo de aplicaciones móviles,Desarrollador web freelance,Servicios de programación web, Desarrollo de software personalizado"
        ></meta>
      </Head>
      <About />
      <Experience />
      <Projects />
      <Profile />
      <Contact />
      <ToastContainer />
      <FloatingWhatsApp
        phoneNumber="34654470578"
        accountName="Kevin Rivera"
        chatMessage="Hola! Me encataría conocer tu proyecto, escribeme para saber más."
        darkMode={true}
      />
    </section>
  );
}
