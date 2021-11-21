import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const MainWrap = ({ children }: MainProps) => {
  return (
    <Box as="main" bgColor="gray.50" height="100%" px={[3, 1]} py={20}>
      {children}
    </Box>
  );
};

export default MainWrap;
