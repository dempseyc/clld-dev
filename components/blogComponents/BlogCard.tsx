import Link from "next/link";
import Image from 'next/image'

const BlogCard = ({post}:{post:any}) => {
  return (
    <div className="container">
      <Image
        alt={post.data.alt}
        src={`/assets/blogImages/${post.data.socialImage}`}
        width={768}
        height={768}
      />
      <Link href={`post/${post.slug}`}>
        <h1>{post.data.metaTitle}</h1>
      </Link>
      <p>{post.data.date}</p>
      <p>{post.data.metaDesc}</p>
    </div>
  );
}

export default BlogCard;