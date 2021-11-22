import { Box, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";

import SideBar from "components/layouts/SideBar/SideBar";
import SideDrawer from "components/layouts/SideBar/SideDrawer";

import HeaderComponent from "../layouts/HeaderComponent";

type ContainerProps = {
  children: ReactNode;
};

// This is the main Container Wrapper to wrap the pages
const ContainerWrapper = ({ children }: ContainerProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box>
      <SideBar />
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <HeaderComponent onOpen={onOpen} />
      <Box marginLeft={[0, 0, 300]}>
        {children}
      </Box>
    </Box>
  );
};

export default ContainerWrapper;
