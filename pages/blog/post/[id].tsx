import fs from 'fs';
import matter from 'gray-matter';

import Image from "next/image"

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
  console.log("paths",paths)
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({params:{id}}){
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
  console.log(frontmatter)
  console.log(content);
  return (
    <div>
      <Image
        src={`/assets/blogImages/${frontmatter.socialImage}`}
        alt={frontmatter.alt}
        width={768}
        height={768}
        />
      <div className="">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
      </div>
    </div>
  );}

export default BlogPost;