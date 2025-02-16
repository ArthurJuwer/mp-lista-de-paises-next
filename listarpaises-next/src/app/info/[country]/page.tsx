import ListarItemApi from "@/components/ListarItemApi";

interface CountryPageProps {
  params: {
    country: string;
  };
}

export default function Country({ params }: CountryPageProps) {
  return <ListarItemApi key="item01" name={params.country} />;
}
