import { useQuery } from "@apollo/client";
import ISoldUI from "./isold.presenter";
import { FETCH_USEDITEMS_SOLD } from "./isold.queries";

export default function ISold() {
  const { data } = useQuery(FETCH_USEDITEMS_SOLD);
  console.log("Sold", data);

  return <ISoldUI data={data} />;
}
