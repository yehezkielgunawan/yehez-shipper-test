import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";

import { menuList } from "constants/menuList";

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideDrawer = ({ isOpen, onClose }: SideDrawerProps) => {
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      {<DrawerOverlay />}

      <DrawerContent>
        <DrawerBody padding={0}>
          {" "}
          {menuList.map((menu, index) => {
            return (
              <Flex
                key={index}
                align="center"
                gridGap={2}
                my={10}
                _hover={{ color: "red" }}
                px={4}
              >
                <Icon as={menu.icon} />
                <Text>{menu.label}</Text>
              </Flex>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
