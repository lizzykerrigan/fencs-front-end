import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { orange, yellow } from "@material-ui/core/colors";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://fencs-back-end.herokuapp.com/v1/graphql"
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700]
    },
    secondary: {
      main: yellow[500]
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
