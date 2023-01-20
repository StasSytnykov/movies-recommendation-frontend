import { CssBaseline, Container, Box } from "@mui/material";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigation } from "./components";
import { useContext } from "react";
import { AppContext } from "./context";

function App() {
  const { locale } = useContext(AppContext);
  const httpLink = new HttpLink({ uri: `${window.location.origin}/graphql` });

  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers")
      ? operation.getContext().headers
      : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale,
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <>
        <CssBaseline />
        <Navigation />

        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            height: "calc(100vh - 68.5px)",
            overflow: "auto",
          }}
        >
          <Container maxWidth={"xl"}>
            <Outlet />
          </Container>
        </Box>
        <ToastContainer />
      </>
    </ApolloProvider>
  );
}

export default App;
