import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link, useLocation } from "react-router-dom";

import { menuList } from "constants/menuList";

const SideBar = () => {
  const currentLoc = useLocation();
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
          <Link key={index} to={menu.route}>
            <Flex
              align="center"
              gridGap={2}
              my={10}
              _hover={{ color: "red" }}
              color={currentLoc.pathname === menu.route ? "red": "black"}
            >
              <Icon as={menu.icon} />
              <Text>{menu.label}</Text>
            </Flex>
          </Link>
        );
      })}
    </Box>
  );
};

export default SideBar;
