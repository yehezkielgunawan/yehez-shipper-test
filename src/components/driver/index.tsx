import { Button } from "@chakra-ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";

import MainWrap from "components/wrapper/MainWrap";

import DriverCard from "./DriverCard";

const DriverComponent = () => {
  return (
    <MainWrap>
      <Stack mx={[2, 8]} py={2} spacing={4} overflow="hidden">
        <Box
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}
          flexWrap={["wrap", "nowrap"]}
          gridGap={4}
          borderRadius={4}
        >
          <Stack spacing={2}>
            <Heading as="h3" color="red" fontSize={["3vh", "4vh"]}>
              <b>DRIVER MANAGEMENT</b>
            </Heading>
            <Text>Data driver yang bekerja dengan Anda.</Text>
          </Stack>
          <Flex gridGap={2} wrap="wrap">
            <InputGroup w={["100%", "100%", 36]}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="red" />}
              />
              <Input type="text" placeholder="Cari Driver" />
            </InputGroup>
            <Button bg="red" color="white" w={["100%", "100%", 36]}>
              TAMBAH DRIVER +
            </Button>
          </Flex>
        </Box>

        <Flex gridGap={8} direction={["column", "row"]} overflowX="scroll">
          <DriverCard
            uid="mxhe8q2w"
            firstName="Suleyman"
            lastName="Mayerhofer"
            phoneNum="08522341234"
            email="suleyman@gmail.com"
            birthDate="1980-08-01T02:21:52.767Z"
            profileImage="https://randomuser.me/api/portraits/med/men/81.jpg"
          />
          <DriverCard
            uid="mxhe8q2w"
            firstName="Suleyman"
            lastName="Mayerhofer"
            phoneNum="08522341234"
            email="suleyman@gmail.com"
            birthDate="1980-08-01T02:21:52.767Z"
            profileImage="https://randomuser.me/api/portraits/med/men/81.jpg"
          />
          <DriverCard
            uid="mxhe8q2w"
            firstName="Suleyman"
            lastName="Mayerhofer"
            phoneNum="08522341234"
            email="suleyman@gmail.com"
            birthDate="1980-08-01T02:21:52.767Z"
            profileImage="https://randomuser.me/api/portraits/med/men/81.jpg"
          />
          <DriverCard
            uid="mxhe8q2w"
            firstName="Suleyman"
            lastName="Mayerhofer"
            phoneNum="08522341234"
            email="suleyman@gmail.com"
            birthDate="1980-08-01T02:21:52.767Z"
            profileImage="https://randomuser.me/api/portraits/med/men/81.jpg"
          />
        </Flex>

        <Flex gridGap={4} align="center" justify="center">
          <Button variant="ghost" leftIcon={<ChevronLeftIcon />}>
            Previous Page
          </Button>
          <Button variant="ghost" rightIcon={<ChevronRightIcon />}>
            Next Page
          </Button>
        </Flex>
      </Stack>
    </MainWrap>
  );
};

export default DriverComponent;
