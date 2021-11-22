import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

// This is the wrapper for the pages
const MainWrap = ({ children }: MainProps) => {
  return (
    <Box as="main" px={[3, 1]} py={20} bgColor="gray.50" minH="100vh" maxH="120vh">
      {children}
    </Box>
  );
};

export default MainWrap;
