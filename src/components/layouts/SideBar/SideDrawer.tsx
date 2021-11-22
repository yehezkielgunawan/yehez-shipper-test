import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import { menuList } from "constants/menuList";

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

// This Side Drawer component will be rendered if opened through the mobile device
const SideDrawer = ({ isOpen, onClose }: SideDrawerProps) => {
  const currentLoc = useLocation();
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      {<DrawerOverlay />}

      <DrawerContent>
        <DrawerBody padding={0}>
          {" "}
          {menuList.map((menu, index) => {
            return (
              <Link key={index} to={menu.route}>
                <Flex
                  align="center"
                  gridGap={2}
                  my={10}
                  _hover={{ color: "red" }}
                  px={4}
                  onClick={onClose}
                  color={currentLoc.pathname === menu.route ? "red" : "black"}
                >
                  <Icon as={menu.icon} />
                  <Text>{menu.label}</Text>
                </Flex>
              </Link>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
