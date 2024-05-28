import { Helmet, HelmetProvider } from "react-helmet-async";
import mainImg from "/me.png";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | dev</title>

          <meta name="description" content="Essa é a página inicial." />

          <meta name="keywords" content="Home, Initial Page, Menu" />
        </Helmet>
      </HelmetProvider>

      <main>
        <div className="center">
          <button>Sobre</button>
          <div>
            <img src={mainImg} alt="Mateus Araújo Silva" />
          </div>
          <button>Meus projetos</button>
        </div>
      </main>
    </>
  );
}
