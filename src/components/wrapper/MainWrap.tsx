import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const MainWrap = ({ children }: MainProps) => {
  return (
    <Box as="main" px={[3, 1]} py={20} bgColor="gray.50" h="100vh">
      {children}
    </Box>
  );
};

export default MainWrap;
