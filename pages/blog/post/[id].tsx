import { ReactElement } from "react";
import Layout from "../../_LAYOUT";
import ScrollSnapBox from "../../../components/ScrollSnapBox";
import {Heading} from "@chakra-ui/react"
import fs from 'fs';
import matter from 'gray-matter';
// will have to import each here and map them to 'metaTitle' ?
import ActionablesListDemo from "../../../components/reactDemos/actionablesListComponents/ActionablesListDemo"
import SimpleMockFetchDemo from "../../../components/reactDemos/SimpleMockFetchDemo"
import Image from "next/image"

const selectDemo = (metaTitle: string) => {
  const demos: { [key: string]: JSX.Element} = {
    ActionablesListDemo: <ActionablesListDemo/>,
    SimpleMockFetchDemo: <SimpleMockFetchDemo/>,
  };
  return demos[metaTitle];
}

const md = require('markdown-it')()
  .use(require('markdown-it-highlightjs'), {inline: true})

export async function getStaticPaths() {
  // Get all the paths from slugs or file names
  const files = fs.readdirSync("posts");
  const paths = files.map((files) => ({
    params: {
      id: files.replace(".md", ""),
    },
  }));
  // console.log("paths",paths)
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({params:{id}}:any){
  const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

const BlogPost = ({ frontmatter ,content}:{ frontmatter:any ,content: any}) => {
  const Demo = selectDemo(frontmatter.metaTitle);
  return (
    <ScrollSnapBox>
      {/* <Image
        src={`/assets/blogImages/${frontmatter.socialImage}`}
        alt={frontmatter.alt}
        width={768}
        height={768}
        /> */}
      <div className="blog-post">
        <Heading className="blog-title">{frontmatter.title}</Heading>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
        {Demo}
      </div>
    </ScrollSnapBox>
  );}

export default BlogPost;

BlogPost.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};