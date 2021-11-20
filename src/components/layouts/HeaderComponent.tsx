import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthChecker";

const HeaderComponent = () => {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <Box
      justifyContent="start"
      bg={colorMode === "light" ? "white" : "gray.700"}
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={5}
      transition="0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        py={2}
        align="center"
        px={isDesktopWidth ? 2 : 4}
      >
        <Image src="assets/logo-shipper.svg" />

        <Flex gridGap={1} align="center">
          <Text>Hello, </Text>
          <Text color="red">Shipper User</Text>
          <Image
            boxSize="36px"
            src="assets/person_icon.png"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
