import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { NavBar } from "./Components/NavBar/NavBar";
import { Config } from "./Config/Config";
import { About } from "./Pages/About/About";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { ProductView } from "./Pages/View/ProductView";
import { Loading } from './Components/Loading/Loading';
import { Alert } from "./UI/Alert";

const route = [
  {
    id: 1,
    name: "Home",
    routeName: "/",
    route: Home,
  },
  {
    id: 2,
    name: "About",
    routeName: "/about",
    route: About,
  },
  {
    id: 3,
    name: "Our Product",
    routeName: "/product",
    route: Product,
  },
  {
    id: 4,
    name: "My order",
    routeName: "/order",
    route: Home,
  },
  {
    id: 5,
    name: null,
    routeName: "/view/:id",
    route: ProductView,
  },  
];

export function App() {
  return (
    <>
      <NavBar route={route} />
      <Routes>
        {route.map((item) => (
          <Route key={item.id} path={item.routeName} element={<item.route />} />
        ))}
      </Routes>
      <Footer/>
      <Config/>
      <Loading/>
      <Alert/>
    </>
  );
}
