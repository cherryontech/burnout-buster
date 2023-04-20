import { createContext, useState } from "react";
// Reference: https://episyche.com/blog/how-to-use-context-api-in-a-nextjs-app

export const Results_data = createContext(null);

function Context({ children }) {
  const [answer, setAnswer] = useState();

  return (
    <Results_data.Provider value={{ answer, setAnswer }}>
      {children}
    </Results_data.Provider>
  );
}

export default Context;