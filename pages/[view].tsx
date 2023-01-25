import { ReactElement, useContext } from "react";
import Layout from "./_LAYOUT";
import { GlobalContext } from "./_LAYOUT";
import { ButtonGroup, Button, Box, Flex, Text } from "@chakra-ui/react";
import type { NextPageWithLayout } from "./_app";
import config from "../_CONSTANTS";

const Page: NextPageWithLayout = () => {
  const context = useContext(GlobalContext);
  return (
    <Flex
      padding="1em"
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* <ButtonGroup variant={"outline"} spacing="6">
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
    </Box> */}
    <Text>{`Here is a paragraph in roboto-slab. ${context.currView}.`}</Text>
    </Flex>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
