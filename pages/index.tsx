import { ReactElement, useEffect } from "react";
import { useCallback, useMemo, useState} from "react";
import Layout from "./_LAYOUT";
import { ButtonGroup, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import type { NextPageWithLayout } from "./_app";
import useC from "./theme/colorSchemes";

const Page: NextPageWithLayout = () => {
  const cScheme = useC(useColorModeValue("light","dark"));
  return (
    <Flex
      p="1em"
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    >
      hello
    </Flex>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
