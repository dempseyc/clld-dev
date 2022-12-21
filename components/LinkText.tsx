import { Button } from "@chakra-ui/react";

const LinkText = (props: any) => {
  return <Button variant="clear" colorScheme="cyan" {...props} >{props.children}</Button>
}

export default LinkText