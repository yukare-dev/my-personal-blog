import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { Post } from "@/app/_lib/definition";

function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(process.cwd(), "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: Post[] = JSON.parse(jsonData);
  return posts.find((post) => post.slug === slug);
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1 className="font-cinzel">{post.title}</h1>
      <p className="font-raleway">{post.date}</p>
      <div>
        <p>{post.summary}</p>
      </div>
    </article>
  );
}
