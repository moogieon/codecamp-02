import ContextAPI from "../../src/components/units/21-contextAPI/contextAPI.container";
import { createContext } from "react";

interface IContext {
  isEdit?: boolean;
}
export const AAAcontext = createContext<IContext>({});
const value = {
  isEdit: true,
};
export default function ContextAPIPAGE() {
  return (
    <AAAcontext.Provider value={value}>
      <ContextAPI />
    </AAAcontext.Provider>
  );
}
