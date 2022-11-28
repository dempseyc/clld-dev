import { ReactNode } from "react";
import { createContext, useContext, useRef } from "react";
import NextLink from "next/link";

import { Flex, Spacer, Box, VStack, chakra, color } from "@chakra-ui/react";
import { BsCircleHalf, BsEnvelope, BsTriangle} from "react-icons/bs";
import { FaCodepen, FaReact } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { Icon, Text } from "@chakra-ui/react";
import { IconButton, Button } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import AnimatedLogo from "./components/AnimatedLogo";
import AnimatedTitle from "./components/AnimatedTitle";

import headerStyle from "../styles/_LAYOUT_TopHeader.module.css";
import navStyle from "../styles/_LAYOUT_NavBar.module.css";
import config from "./_CONSTANTS";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

type GlobalContextShape = {currView: string; setCurrView?: (currView:string)=>void };
const GlobalContextDefault: GlobalContextShape = {currView:'home'};

const GlobalContext = createContext(GlobalContextDefault);

const ColorModeControl = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      bottom="0.5em"
      right="0.5em"
      onClick={toggleColorMode}
      backgroundColor="transparent"
      aria-label="darkmode button"
      size="lg"
      icon={<Icon fontSize={"1.5em"} as={BsCircleHalf} />}
      />
  );
};

const TopHeader = () => {
  return (
    <Flex
      flexShrink={0}
      marginBottom={["1.5em", "0"]}
      padding="1em"
      className={headerStyle.TopHeader}
      justify="flex-start"
      align="center"
      direction={["column", "row"]}
    >
      <Box height="100%">
        <AnimatedLogo />
      </Box>
      <Spacer />
      <Box flexBasis="100%" paddingLeft={["0", "1em"]}>
        <AnimatedTitle />
      </Box>
      
    </Flex>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(GlobalContext);
  const Footer = () => {
    return (
      <Drawer isOpen={isOpen} placement="bottom" size="lg" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent height="70vh">
            <DrawerCloseButton />
            <DrawerHeader textAlign="center">Contact Me</DrawerHeader>

            <DrawerBody textAlign="center">
              <Text>FOOTER</Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  };

  const Links = [...config.HOME_VIEWS, ...config.OTHER_LINKS].map((info,i) => {
    return (
      <NextLink key={i} href={info.href}>
        <Button
          onClick={()=> context.setCurrView && context.setCurrView(info.name)}
          variant="clear"
          colorScheme={(info.name===context.currView)? "pink" : "cyan"}
          aria-label={info.name.split("_").join(" ")}
          leftIcon={info.name==="home"?<Icon fontSize={"1.5em"} as={BsTriangle} />:undefined}
          size={["lg"]}
          mr="0.5em"
        >{info.name}</Button>
      </NextLink>
    )
  });

  return (
    <VStack align="flex-start" className={navStyle.NavBar}>
      {Links}
      // Footer Show Button
      <Button
          variant="clear"
          onClick={onOpen}
          colorScheme={"cyan"}
          aria-label="contact"
          leftIcon={<Icon fontSize={"1.5em"} as={BsEnvelope} />}
          size={["lg"]}
          mr="0.5em"
        >CONTACT</Button>
      <Footer />
    </VStack>
  );
};

const Layout = ({ children }: Props) => {
  const globalVals = useRef({
    currView:"home",
  });
  const setCurrView = (viewName: string) => { globalVals.current.currView = viewName }
  return (
    <GlobalContext.Provider value={{currView: globalVals.current.currView, setCurrView}}>
    <Flex
      className="Layout"
      direction="column"
      height="100vh"
      width={["100vw", "100vw", "48em", "48em"]}
      margin="0 auto"
      overflow="hidden"
      >
      <TopHeader />
      <Box flexShrink={100} className="main">
        <main>{children}</main>
      </Box>
      <Box
        flexShrink={0}
        position="fixed"
        bottom={0}
        left={0}
        pb="1em"
        pl="0.3em"
        >
        <Navbar />
      </Box>
      <Box><Text>Here is a good paragraph in roboto-slab.</Text></Box>
      <ColorModeControl />
    </Flex>
    </GlobalContext.Provider>
  );
};

export default Layout;