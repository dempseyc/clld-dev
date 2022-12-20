import { Box, Heading, Text, Image} from "@chakra-ui/react";
import NextLink from "next/link";
import LinkText from "../components/LinkText";
import { FaGithub } from "react-icons/fa";

const ProjectFigure = (props: any) => {
  const data = props.data;
  return (
    props?.data ?
    <Box 
      mb={"3em"} 
      // scrollSnapStop="always"
      scrollSnapAlign="start"
    >
      <Heading fontSize={["2xl","3xl"]}>{data.title}</Heading>
      <Text>{data.heading}</Text>
      <Text>{data.stack}</Text>
      {data.githublink !== undefined && (
        <NextLink href={data.githublink}>
          <LinkText leftIcon={<FaGithub />}>GITHUB link</LinkText>
        </NextLink>
      )}
      <NextLink href={data.link}>
        <LinkText>DEMO</LinkText>
        <Image width={["100%"]}src={`/assets/images/${data.thumbnail}`} alt={data.heading} />
      </NextLink>
    </Box>
    : null
  );
};

export default ProjectFigure;
