import Head from "next/head";
import DemoNavbar from "../components/Navbars/DemoNavbar";
import Hero from "../components/landing/Hero";
import Tim from "../components/landing/Tim";
import Artikel from "../components/landing/Artikel";
import Project from "../components/landing/Project";
import Carousel from "../components/landing/Carousel";
import Footer from "../components/footer/Footer";
import Visi from "../components/landing/Visi";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("login");
    console.log(login);
    if (login === null) setIsLogin(false);
    else setIsLogin(true);
  }, [])

  return (
    <div>
      <Head>
        <title>Viapulsa - Divisi IT</title>
        <meta
          name="description"
          content="NextJs UI kit | Free UI kit built with bootstrap"
        />
        <link rel="icon" href="/ico.webp" />
      </Head>
      <DemoNavbar/>
      <Hero />
      <Artikel isLogin={isLogin} />
      <Project />
      {/* <Carousel /> */}
      <Visi />
      <Tim />
      <Footer />
    </div>
  );
}
