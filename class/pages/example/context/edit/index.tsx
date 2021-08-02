import { createContext } from "react";
import Write from "../../../../src/components/units/example/write/write.container";

export const BBBcontext = createContext({});
const value = {
  isEdit: true,
};

export default function EditPage() {
  return (
    <BBBcontext.Provider value={value}>
      <Write />
    </BBBcontext.Provider>
  );
}
