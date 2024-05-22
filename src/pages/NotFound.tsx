import { Helmet, HelmetProvider } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Página não encontrada | dev</title>

          <meta
            name="description"
            content="Oops! Parece que você tentou acessar uma página que não existe. Por favor, volte para a página inicial."
          />

          <meta name="keywords" content="Error, 404, NotFound" />
        </Helmet>
      </HelmetProvider>

      <h1>Página não encontrada!</h1>
    </>
  );
}
