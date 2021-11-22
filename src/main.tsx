import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { webRoutes } from "routes";

import ContainerWrapper from "./components/wrapper/ContainerWrapper";
import theme from "./theme";

// Declare the routing config and chakra provider here
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <ContainerWrapper>
          <Routes>
            {webRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </ContainerWrapper>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
