import {Heading, Text} from "@chakra-ui/react";
import ScrollSnapBox from "../../components/ScrollSnapBox";
import CodeContainer from "../CodeContainer";
import ActionablesListDemo from "./ActionablesListDemo";

const Post = () => {
  return (
    <ScrollSnapBox>
    <Heading>Actionables List Demo</Heading>
    <Text>
      I find this to be a useful Pattern.
    </Text>
    <Text>
      Somewhere in your app you have set up some state and dynamic 'data'.  You have designed a listItem component that can trigger actions based on the data.
    </Text>
    <Text>
      With this pattern, you only customize your listItem design and your actions object to match each other, and to match the specifics of your use case.
    </Text>
    <ActionablesListDemo/>
    <Text>
      ... next we will combine this with a filtered list to make InfiniteSearchList ...
    </Text>

    </ScrollSnapBox>
  )
}

export default Post;