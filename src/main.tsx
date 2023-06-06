import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBar />
      <App />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
