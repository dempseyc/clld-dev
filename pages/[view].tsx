import Router from "next/router";
import { ReactElement, useEffect, useContext } from "react";
import { useCallback, useMemo, useState} from "react";
import Layout from "./_LAYOUT";
import { GlobalContext } from "./_LAYOUT";
import { ButtonGroup, Button, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import type { NextPageWithLayout } from "./_app";
import config from "./_CONSTANTS";

const Page: NextPageWithLayout = () => {
  const context = useContext(GlobalContext);
  return (
    <Flex
      p="1em"
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <ButtonGroup variant={"outline"} spacing="6">
        <Button colorScheme={"cyan"}>Save</Button>
        <Button variant={"solid"} colorScheme={"yellow"}>Cancel</Button>
      </ButtonGroup>
        <Button leftIcon={<MdBuild />} variant="clear">
          Settings
        </Button>
        <Button leftIcon={<MdBuild />} variant="outline">
          Settings
        </Button>
      <ButtonGroup variant="outline" spacing="6">
        <Button rightIcon={<MdCall />} 
        colorScheme={"pink"} variant="solid">
          Call us
        </Button>
        <Button rightIcon={<MdCall />} 
        colorScheme={"pink"} variant="clear">
          Call us
        </Button>
      </ButtonGroup>
      <Box>
          <Text>{`Here is a good paragraph in roboto-slab. ${context.currView}`}</Text>
        </Box>
    </Flex>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
