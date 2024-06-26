import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({
    // posts: [
    //   {
    //     slug: "my-first-post",
    //     title: "My First Post",
    //   },
    //   {
    //     slug: "90s-mixtape",
    //     title: "A Mixtape I Made Just For You",
    //   },
    // ],
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        管理者ページ
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
