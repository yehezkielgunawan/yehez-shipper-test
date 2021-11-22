import { Button } from "@chakra-ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useEffect, useState } from "react";

import MainWrap from "components/wrapper/MainWrap";
import { formatDate } from "functions/helpers/formatDate";
import { getUsers } from "functions/services/fetcher";
import { Results, SingleUser } from "functions/services/types";

import DriverCard from "./DriverCard";

const DriverComponent = () => {
  const [users, setUsers] = useState<Array<SingleUser>>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [usersLength, setUsersLength] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!localStorage.getItem("usersData")) {
      getUsers().then((res: Results) => {
        setUsers(res.results);
        setUsersLength(res.results.length);
        localStorage.setItem("usersData", JSON.stringify(res.results));
      });
    } else {
      setUsers(JSON.parse(localStorage.getItem("usersData") || "[]"));
      setUsersLength(
        JSON.parse(localStorage.getItem("usersData") || "[]").length
      );
    }
  }, []);

  const handleSearchInput = (
    searchKey: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsersLength(
      users.filter((user) =>
        user.name.first
          .toLowerCase()
          .includes(searchKey.target.value.toLowerCase())
      ).length
    );
    setPage(1);
    return setKeyword(searchKey.target.value);
  };

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
              <Input
                type="text"
                placeholder="Cari Driver"
                onChange={handleSearchInput}
              />
            </InputGroup>
            <Button bg="red" color="white" w={["100%", "100%", 36]}>
              TAMBAH DRIVER +
            </Button>
          </Flex>
        </Box>

        <Flex gridGap={8} direction={["column", "row"]} overflowX="scroll">
          {usersLength > 0 ? (
            (keyword.length < 1
              ? users
              : users.filter((user) =>
                  user.name.first.toLowerCase().includes(keyword.toLowerCase())
                )
            )
              .map((user, index) => (
                <Skeleton isLoaded={user ? true : false} key={index}>
                  <DriverCard
                    uid={user.login.salt}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    phoneNum={user.phone}
                    email={user.email}
                    birthDate={formatDate(user.dob.date, false)}
                    profileImage={user.picture.medium}
                  />
                </Skeleton>
              ))
              .filter(
                (user, index) =>
                  page * 5 - 5 <= index && index < page * 5 && user
              )
          ) : (
            <Text textAlign="center" w="100%" py={4}>
              Data tidak ditemukan atau data sedang kosong.
            </Text>
          )}
        </Flex>

        <Flex gridGap={4} align="center" justify="center">
          <Button
            variant="ghost"
            leftIcon={<ChevronLeftIcon />}
            disabled={usersLength <= 5 || page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            Previous Page
          </Button>

          <Button
            variant="ghost"
            rightIcon={<ChevronRightIcon />}
            disabled={
              usersLength <= 5 || usersLength - (page - 1) * 5 <= 5
                ? true
                : false
            }
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </Button>
        </Flex>
      </Stack>
    </MainWrap>
  );
};

export default DriverComponent;
