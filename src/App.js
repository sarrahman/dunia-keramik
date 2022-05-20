import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "./routes";
import algoliasearch from "algoliasearch/lite";
import { Provider } from "react-redux";
import store from "./configs/store";
import { InstantSearch } from "react-instantsearch-hooks";

const searchClient = algoliasearch(
  "YFXQX4S9XW",
  "db067ba34949f85333ece7db7d10ae17"
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#16666f",
    },
    secondary: {
      main: "#2a96a2",
    },
    background: {
      main: "#dfe6ee",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <InstantSearch
        suppressExperimentalWarning={true}
        searchClient={searchClient}
        indexName="all-products"
      >
        <Provider store={store}>
          <Router />
        </Provider>
      </InstantSearch>
    </ThemeProvider>
  );
}
