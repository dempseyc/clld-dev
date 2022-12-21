import {Heading, Text} from "@chakra-ui/react";

const totalText = "Craig Dempsey - dev"

const AnimatedTitle = () => {
  return (
    <Heading textAlign="left" className="title" fontSize={["1.75rem", "3rem"]} fontWeight={"regular"}>
        <Text display={"inline-flex"}>{`Craig Dempsey`}</Text><Text display={"inline"} fontWeight={"light"} fontSize={["1.5rem", "2.3rem"]}>{` - dev`}</Text>
      </Heading>
  )
}

export default AnimatedTitle;