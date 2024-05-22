import { Helmet, HelmetProvider } from "react-helmet-async";

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
        <h1>Mateus Araújo Silva</h1>
      </main>
    </>
  );
}
