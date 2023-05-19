import Head from "next/head";
import DemoNavbar from "../../../components/Navbars/DemoNavbar";
import InsertTim from "../../../components/Add/InsertTim";

const AddTim = () => {
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
      <InsertTim />
    </div>
  );
};

export default AddTim;
