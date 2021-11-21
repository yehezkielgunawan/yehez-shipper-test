import { Box, Flex, Icon, Divider, Stack, Text, Image } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

type DriverProps = {
  uid: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  email: string;
  birthDate: string;
  profileImage: string;
};

const DriverCard = ({
  uid,
  firstName,
  lastName,
  phoneNum,
  email,
  birthDate,
  profileImage,
}: DriverProps) => {
  return (
    <Box
      bg="white"
      minW={["100%", "240px"]}
      alignItems="center"
      px={4}
      py={4}
      borderRadius={4}
    >
      <Flex justify="space-between" align="center">
        <Flex gridGap={2}>
          <Text>Driver ID</Text>
          <Text color="red">{uid}</Text>
        </Flex>
        <Icon as={BsThreeDots} />
      </Flex>
      <Divider my={2} />
      <Flex
        gridGap={3}
        align={["center", "start"]}
        direction={["row", "column"]}
      >
        <Image borderRadius="full" src={profileImage} w="100px" />
        <Stack>
          <Stack>
            <Text color="gray.400" fontSize="sm">
              Nama Driver
            </Text>
            <Text>
              <b>
                {firstName} {lastName}
              </b>
            </Text>
          </Stack>
          <Stack>
            <Text color="gray.400" fontSize="sm">
              Telepon
            </Text>
            <Text>
              <b>{phoneNum}</b>
            </Text>
          </Stack>
          <Stack display={["none", "block"]}>
            <Text color="gray.400" fontSize="sm">
              Email
            </Text>
            <Text>
              <b>{email}</b>
            </Text>
          </Stack>
          <Stack display={["none", "block"]}>
            <Text color="gray.400" fontSize="sm">
              Tanggal Lahir
            </Text>
            <Text>
              <b>{birthDate}</b>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default DriverCard;
