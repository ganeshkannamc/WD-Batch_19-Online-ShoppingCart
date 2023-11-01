import { createContext, useState } from "react";

let DataProvider = createContext({});

export const DataContext = ({ children }) => {
  let products = [
    {
      id: 1,
      brand: "Samsung",
      name: "Flip",
      price: 3000,
      description: "test message",
      image:'https://motorolain.vtexassets.com/arquivos/ids/158270/razr-40-ultra-ecom-render-12-viva-magenta-z55zdrkf.png?v=638229688338270000',
      cartCount: 0,
      isAdded: false,
    },
    {
      id: 2,
      brand: "Moto",
      name: "Razr",
      price: 8000,
      description: "test message",
      image:'https://motorolain.vtexassets.com/arquivos/ids/158270/razr-40-ultra-ecom-render-12-viva-magenta-z55zdrkf.png?v=638229688338270000',
      cartCount: 0,
      isAdded: false,
    },
    {
      id: 3,
      brand: "Apple",
      name: "iPhone12",
      price: 7000,
      description: "test message",
      image:'https://motorolain.vtexassets.com/arquivos/ids/158270/razr-40-ultra-ecom-render-12-viva-magenta-z55zdrkf.png?v=638229688338270000',
      cartCount: 0,
      isAdded: false,
    },
  ];
  const [manageLogin, setManageLogin] = useState({
    username: "",
    password: "",
    role: "",
    loginState: false,
  });

  let [feed, setFeed] = useState(products);

  return (
    <DataProvider.Provider
      value={{ manageLogin, setManageLogin, feed, setFeed }}
    >
      {children}
    </DataProvider.Provider>
  );
};

export default DataProvider;
