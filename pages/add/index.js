import Head from "next/head";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import Insert from "../../components/landing/Insert";
import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        const login = localStorage.getItem("login");

        if (login !== "true") {
            window.location.href = "/login";
        } if (login === null) {
            window.location.href = "/login";
        }
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
      <DemoNavbar />
      <Insert />
    </div>
  );
};

export default Index;
