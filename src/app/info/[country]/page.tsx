
import ListarItemApi from "@/components/ListarItemApi";
// interface CountryPageProps {
//   params: { country: string };
// }

export default function Country({ params }: { params: { country: string } }) {
  const { country } = params;  // Destructure params correctly here
  return <ListarItemApi key="item01" name={country} />;
}


