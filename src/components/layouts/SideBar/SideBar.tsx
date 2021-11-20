import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

import { menuList } from "constants/menuList";

const SideBar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      height="full"
      width={300}
      backgroundColor="white"
      zIndex={5}
      py={2}
      px={2}
      display={["none", "block"]}
    >
      <Image src="assets/logo-shipper.svg" display={["none", "block"]} />

      {menuList.map((menu, index) => {
        return (
          <Flex
            key={index}
            align="center"
            gridGap={2}
            my={10}
            _hover={{ color: "red" }}
          >
            <Icon as={menu.icon} />
            <Text>{menu.label}</Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default SideBar;
