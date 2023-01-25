import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Heading } from "@chakra-ui/react";

const BlogCard = ({ post }: { post: any }) => {
  return (
    <Link className={"blog-card"} href={`post/${post.slug}`}>
      <Flex justifyContent={"flex-end"}>
        <Box float={"right"} flex={"0 1 66%"}  p={3}>
          <Heading fontSize={["1.5em","2em","2em"]}>{post.data.title}</Heading>
          <p>{post.data.date}</p>
        <p>{post.data.metaDesc}</p>
        </Box>
        <Box float={"right"} flex={"1 0 34%"}>
          <Image
            alt={post.data.alt}
            src={`/assets/blogImages/${post.data.socialImage}`}
            width={150}
            height={150}
          />
        </Box>
      </Flex>
    </Link>
  );
};

export default BlogCard;
