import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

import MainWrap from "components/wrapper/MainWrap";
import { menuList } from "constants/menuList";

function App() {
  return (
    <MainWrap>
      <Stack spacing={4} my={40}>
        <Heading as="h1" textAlign="center">
          DRIVER MANAGEMENT SERVICE
        </Heading>
        <Flex gridGap={4} wrap="wrap" align="center" justify="center">
          {menuList.map(
            (menu, index) =>
              index > 0 && (
                <Link key={index} to={menu.route}>
                  <Button
                    border="2px"
                    leftIcon={<menu.icon />}
                    borderColor="red"
                    bg="white"
                    size="lg"
                    w="240px"
                  >
                    {menu.label}
                  </Button>
                </Link>
              )
          )}
        </Flex>
      </Stack>
    </MainWrap>
  );
}

export default App;
