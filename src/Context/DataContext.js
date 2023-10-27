import { createContext,useState } from "react";

let DataProvider = createContext({});

export const DataContext = ({ children }) => {
  const [manageLogin, setManageLogin] = useState({
    username: "",
    password: "",
    role: "",
    loginState: false,
  });

  return (
    <DataProvider.Provider value={{ manageLogin, setManageLogin }}>
      {children}
    </DataProvider.Provider>
  );
};

export default DataProvider;
