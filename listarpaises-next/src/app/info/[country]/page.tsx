import ListarItemApi from "@/components/ListarItemApi";
import { GetServerSideProps } from "next";

interface CountryPageProps {
  params: { country: string };
}

export default function Country({ params }: CountryPageProps) {
  return <ListarItemApi key="item01" name={params.country} />;
}

// Se você estiver usando SSR, adicione esta função
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { country } = context.params as { country: string };

  return {
    props: {
      params: { country },
    },
  };
};