import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import Footer from "../../components/footer/Footer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import Item from "../../components/detail/Item";

const Index = () => {
  const router = useRouter();
  const { contentId } = router.query;
  const [artikel, setArtikel] = useState({});

  const getArtikel = async () => {
    const colRef = collection(firestore, "content_it");
    const judulRef = query(colRef, where("judul", "==", contentId));
    const res = await getDocs(judulRef);
    res.docs.forEach((doc) => {
      setArtikel(doc.data());
    });
  };

  useEffect(() => {
    getArtikel();
  }, []);

  return (
    <>
      <Head>
        <title>Viapulsa - Divisi IT</title>
        <meta
          name="description"
          content="NextJs UI kit | Free UI kit built with bootstrap"
        />
        <link rel="icon" href="/ico.webp" />
      </Head>
      <DemoNavbar />
      <div className="position-relative" style={{ maxHeight: 200 }}>
        {/* Hero for FREE version */}
        <section className="section section-hero section-shaped">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
      <section className="section mt--100">
        <Item {...artikel} />
      </section>
      <Footer />
    </>
  );
};

export default Index;
