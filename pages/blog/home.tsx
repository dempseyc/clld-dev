import { ReactElement } from 'react';
import Layout from '../_LAYOUT';
import ScrollSnapBox from '../../components/ScrollSnapBox';
import fs from 'fs'
import matter from "gray-matter";

import BlogCard from "../../components/blogComponents/BlogCard"

export async function getStaticProps(){

  const files = fs.readdirSync("posts");

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const filecontent = fs.readFileSync(`posts/${file}`, "utf-8");
    const parsedContent = matter(filecontent);
    const {data} = parsedContent
    return {
      slug,
      data,
    };
  });

  return {
    props:{
      posts
    }
  }
}

const Home = ({posts}:{posts:any[]}) => {
  return (
    <ScrollSnapBox>
      {posts?.map((post: {},index: number)=>(
        <BlogCard key={index} post={post} />
      ))}
    </ScrollSnapBox>
  );
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};