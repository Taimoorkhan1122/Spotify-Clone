import { ChakraProvider } from "@chakra-ui/react";
import "reset-css";

import PlayerLayout from "../components/PlayerLayout";
import { theme } from "./theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
};

export default MyApp;
