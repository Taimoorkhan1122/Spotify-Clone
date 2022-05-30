import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        background="blue.100"
        position="absolute"
        width="250px"
        height="100%"
        left="0"
        bottom="100px"
      >
        Sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box
        background="gray.100"
        position="absolute"
        width="100vw"
        height="100px"
        left="0"
        bottom="0"
      >
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
