import ListarItemApi from "@/components/ListarItemApi";

interface CountryParams {
  params: {
    country: string;
  };
}

export default function Country({ params: {country} }: CountryParams) {
  return <ListarItemApi key="item01" name={country} />;
}
