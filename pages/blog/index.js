import Posts from "../posts.json";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="container">
      <h1> Latest Posts </h1>
      <div className="posts">
        {Posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <img src={post.cover} alt="blogimage" />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link legacyBehavior href={post.slug}>
                <a href={post.slug}>Read Post</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
