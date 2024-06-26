import type { Post } from "@prisma/client";

import { prisma } from "~/db.server";

// interface Post {
//   slug: string;
//   title: string;
// }

export async function getPosts(): Promise<Post[]> {
  // return [
  //   {
  //     slug: "my-first-post",
  //     title: "My First Post",
  //   },
  //   {
  //     slug: "90s-mixtape",
  //     title: "A Mixtape I Made Just For You",
  //   },
  // ];

  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">,
) {
  return prisma.post.create({ data: post });
}
