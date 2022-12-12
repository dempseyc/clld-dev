import React, { ReactNode, useState } from "react";
import { createContext, useContext, useRef } from "react";
import NextLink from "next/link";

import { Flex, Spacer, Box, VStack, Divider, chakra, keyframes} from "@chakra-ui/react";
import { BsCircleHalf } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
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
import config from "../_CONSTANTS";
import { useRouter } from "next/router";

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
      padding={["0.5em"]}
      className={headerStyle.TopHeader}
      justify="flex-start"
      align="center"
      direction={["column", "row"]}
    >
      <Box height="100%" maxWidth={["100%","20%"]} >
        <AnimatedLogo />
      </Box>
      <Spacer />
      <Box flexBasis={["100%", "80%"]} paddingLeft={["0", "1em"]} paddingRight="0.1em">
        <AnimatedTitle />
      </Box>
    </Flex>
  );
};

const makeBlink = keyframes`
    0% {opacity: 1;}
    90% {opacity: 1;}
    95% {opacity: 0;}
    100% {opacity: 1;}
`;

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuOpen, setMenuOpen] = useState(true);
  const [copiedText, setCopiedText] = useState('Contact Me');
  const context = useContext(GlobalContext);
  const darkBg = "linear-gradient(90deg, rgba(26,32,44,1) 40%, rgba(255,255,255,0) 100%)"
  const lightBG = "linear-gradient(90deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%)"
  
  const Footer = () => {
    return (
      <Drawer isOpen={isOpen} placement="bottom" size="lg" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent height="30vh">
            <DrawerCloseButton />
            <DrawerHeader paddingTop="2em" textAlign="center">{copiedText}</DrawerHeader>
            <DrawerBody 
            textAlign="center" 
            // fontSize="4em" 
            // lineHeight={"4em"}
            >
              <NextLink href="https://www.linkedin.com/in/craiglldempsey/">
                <IconButton icon={<BsLinkedin/>} aria-label="linked in icon, button links to profile" size="lg" />
              </NextLink>
              <NextLink href="https://www.instagram.com/dempseycraig/">
                <IconButton icon={<BsInstagram/>} aria-label="instagram icon, button links to instagram profile" size="lg" />
              </NextLink>
              <NextLink href="https://github.com/dempseyc/">
                <IconButton icon={<BsGithub/>} aria-label="github icon, button links to github profile" size="lg" />
              </NextLink>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  };

  const currLinkBg = useColorModeValue("gray.800", "gray.200");
  const otherLinkBg = useColorModeValue("gray.800", "gray.200");
  const Links = [...config.HOME_VIEWS, ...config.OTHER_LINKS].map((info, i) => {
    console.log(context.currView);
    return (
      <NextLink
        key={i}
        href={info.href}
        style={{
          width: "100%",
          height: info.name !== context.currView && !menuOpen ? "0" : "3em",
          opacity: info.name !== context.currView && !menuOpen ? "0" : "1",
          transition: "height ease-in-out 300ms, opacity ease-in-out 200ms",
        }}
      >
        <Button
        paddingInlineEnd={"1rem"}
        paddingInlineStart={"1rem"}
          _before={
            info.name === context.currView
            ? {
              content: `""`,
              mr: "10px",
              display: "inline-block",
              width: "1px",
              height: "100%",
              bg: currLinkBg,
              opacity: "1",
              transition: "all 500ms",
              animation:`${makeBlink} 4.5s linear infinite`
                }
              : {
                  content: `""`,
                  mr: "10px",
                  display: "inline-block",
                  width: "1px",
                  height: "100%",
                  bg: otherLinkBg,
                  opacity: "0",
                  transition: "all 500ms",
                }
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

  const fallbackCopyToClipboard = (str: string, cb:()=>void) => {
    const el = document.createElement('textarea');
    el.value = str.trim();
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    try {
      let success = document.execCommand('copy');
      cb();
      console.log(`${str} copied to clipboard`);
    } catch (error) {
      console.log('in fallback copy', error);
    }
    document.body.removeChild(el);
  };
  
  const copyToClipboard = (str: string, cb:()=>void) => {
    if (!navigator.clipboard) {
      fallbackCopyToClipboard(str, cb);
      return;
    }
    navigator.clipboard.writeText(str).then(() => {
      console.log(`${str} copied to clipboard`);
      cb();
    }, (error) => console.log('in copyToClipboard', error))
  }
  
  const clickToCopy = (e: React.SyntheticEvent) => {
    const cb = () => {
      setCopiedText("'craig.dempsey@gmail.com' copied to Clipboard!");
    };
    e.preventDefault();
    copyToClipboard("craig.dempsey@gmail.com", cb);
  }

  return (
    <VStack
      align="stretch"
      spacing={0}
      width={"40vh"}
      className={navStyle.NavBar}
      bg={useColorModeValue(lightBG,darkBg)}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      {Links}
      {/* Footer Show Button "CONTACT" */}
      <Button
        _before={{
          content: `""`,
          mr: "10px",
          display: "inline-block",
          width: "1px",
          height: "100%",
          bg: "transparent",
        }}
        justifyContent={"flex-start"}
        width="100%"
        variant="clear"
        onClick={(e) => { onOpen(); clickToCopy(e)}}
        colorScheme={"cyan"}
        aria-label="contact"
        size={["lg"]}
      >
        CONTACT
      </Button>
      <Footer />
    </VStack>
  );
};

// export const GlobalContext = createContext({ currView: "react_stuff" });
export const GlobalContext = createContext({ currView: "home" });

const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <GlobalContext.Provider value={{ currView: router.query.view as string }}>
      <Flex
        className="Layout"
        direction="column"
        height="100vh"
        width={["100vw", "100vw", "48em"]}
        margin="0 auto"
        overflow="hidden"
      >
        <TopHeader />
      <Box ml={["0em","6em"]} mt={"1.5em"} flex={["0 0 65vh","0 0 80vh"]} overflow={"scroll"} className="main" bg="#88888820" border="12px solid #00000000">
          <main>{children}</main>
        </Box>
        <Box
          className="navBarContainer"
          flexShrink={0}
          position="fixed"
          bottom={0}
          left={0}
          pb={["0","1em"]}
        >
          <Navbar />
        </Box>
        <ColorModeControl />
      </Flex>
    </GlobalContext.Provider>
  );
};

export default Layout;
