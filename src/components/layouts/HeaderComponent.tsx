import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { IconButton, Image } from "@chakra-ui/react";

type HeaderProps = {
  onOpen: () => void;
};

const HeaderComponent = ({ onOpen }: HeaderProps) => {
  return (
    <Box
      justifyContent={["space-between", "end"]}
      alignItems="center"
      py={[0, 2]}
      px={[4, 2]}
      bg="white"
      position="fixed"
      width="100%"
      opacity="0.95"
      top={0}
      zIndex={2}
      transition="0.3s ease-out"
      display="flex"
    >
      <Flex align="center" display={["flex", "none"]}>
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
        <Box display={["none", "flex"]} gridGap={1}>
          <Text>Hello, </Text>
          <Text color="red">Shipper User</Text>
        </Box>
        <Image
          boxSize="36px"
          src="https://res.cloudinary.com/yehez/image/upload/v1637425557/Shipper/person_icon_aykrqb.png"
        />
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
