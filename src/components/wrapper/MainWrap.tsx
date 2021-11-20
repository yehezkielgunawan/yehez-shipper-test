import { Stack } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthChecker";

type MainProps = {
  children: ReactNode;
};

const MainWrap = ({ children }: MainProps) => {
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <Stack
      width="100%"
      maxWidth="48rem"
      pt="4rem"
      px={isDesktopWidth ? 1 : 3}
      mt={8}
      spacing={4}
    >
      {children}
    </Stack>
  );
};

export default MainWrap;
