import { Box } from "@chakra-ui/react";

const ScrollSnapBox = (props: any) => {
  return (
    <Box
      scrollSnapType="y mandatory"
      height={["65vh", "80vh"]}
      overflowY={"auto"}
      width={"100%"}
    >
      {props.children}
    </Box>
  );
};

export default ScrollSnapBox;
