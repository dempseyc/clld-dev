import { ReactNode, useState } from "react";
import { createContext, useContext, useRef } from "react";
import NextLink from "next/link";

import { Flex, Spacer, Box, VStack, Divider, chakra } from "@chakra-ui/react";
import { BsCircleHalf } from "react-icons/bs";
import { Icon, Text } from "@chakra-ui/react";
import { IconButton, Button, ButtonGroup } from "@chakra-ui/react";
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
import { useRouter } from "next/router";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

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
  const [ menuOpen, setMenuOpen ] = useState(true);
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

  const Links = [...config.HOME_VIEWS, ...config.OTHER_LINKS].map((info, i) => {
    console.log(context.currView);
    return (
      <NextLink key={i} href={info.href} style={{ 
        width: "100%",
        height: ((info.name !== context.currView) && !menuOpen) ? "0" : "3em",
        opacity: ((info.name !== context.currView) && !menuOpen) ? "0" : "1",
        transition: "all 500ms"
      }}>
        <Button
          className="menu-button"
          _before={ (info.name === context.currView) ?
            { content: `""`, mr: "10px", display:"inline-block", width:"1px", height:"100%", bg: useColorModeValue('gray.800','gray.200'), opacity: "1", transition: "all 500ms" } :
            { content: `""`, mr: "10px", display:"inline-block", width:"1px", height:"100%", bg: useColorModeValue('gray.800','gray.200'), opacity: "0", transition: "all 500ms" }
          }
          justifyContent={"flex-start"}
          width="100%"
          onClick={() => {
            info.name === context.currView && setMenuOpen(!menuOpen);
          }}
          variant={"clear"}
          colorScheme={info.name === context.currView ? "gray" : "cyan"}
          aria-label={info.name.split("_").join(" ")}
          size={["lg"]}
          mr="0.5em"
        >
          {info.name}
        </Button>
      </NextLink>
    );
  });

  return (
    <VStack align="stretch" spacing={0} className={navStyle.NavBar} onMouseEnter={()=>setMenuOpen(true)} onMouseLeave={()=>setMenuOpen(false)}>
      {Links}
      // Footer Show Button
      <Button
        _before={{ content: `""`, mr: "10px", display:"inline-block", width:"1px", height:"100%", bg: "transparent" } }
        justifyContent={"flex-start"}
        width="100%"
        variant="clear"
        onClick={onOpen}
        colorScheme={"cyan"}
        aria-label="contact"
        size={["lg"]}
        mr="0.5em"
      >
        CONTACT
      </Button>
      <Footer />
    </VStack>
  );
};

export const GlobalContext = createContext({ currView: "home",})

const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <GlobalContext.Provider value={{currView: router.query.view as string}}>
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
        <ColorModeControl />
      </Flex>
    </GlobalContext.Provider>
  );
};

export default Layout;
