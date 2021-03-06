import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { IconButton, Image } from "@chakra-ui/react";

type HeaderProps = {
  onOpen: () => void;
};

// This is the header component, I set the fixed position to keep it sticky at the top
const HeaderComponent = ({ onOpen }: HeaderProps) => {
  return (
    <Box
      justifyContent={["space-between", "space-between", "end"]}
      alignItems="center"
      py={[0, 0, 2]}
      px={[4, 4,  2]}
      bg="white"
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={2}
      transition="0.3s ease-out"
      display="flex"
    >
      <Flex align="center" display={["flex", "flex", "none"]}>
        <IconButton
          aria-label="menu"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Image
          objectFit="contain"
          boxSize="72px"
          src="assets/logo-shipper.svg"
        />
      </Flex>

      <Flex justify="end" align="center" gridGap={1}>
        <Box display={["none", "none","flex"]} gridGap={1}>
          <Text>Hello, </Text>
          <Text color="red">Shipper User</Text>
        </Box>
        <Image boxSize="36px" src="assets/person_icon.png" />
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
