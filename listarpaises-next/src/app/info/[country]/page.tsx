import ListarItemApi from "@/components/ListarItemApi";

interface CountryParams {
  country: string;
}

export default function Country({ params }: { params: CountryParams }) {
  return <ListarItemApi key="item01" name={params.country} />;
}
