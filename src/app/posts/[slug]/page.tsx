import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React, { Usable } from "react";
import Image from "next/image";
import { Post } from "@/app/_lib/definition";
import LikeButton from "@/app/_components/LikeButton";

function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(process.cwd(), "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: Post[] = JSON.parse(jsonData);
  return posts.find((post) => post.slug === slug);
}

export default function PostPage({
  params,
}: {
  params: Usable<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="text-center flex flex-col items-center p-8">
      <div className="relative w-1/2 h-64 md:h-80 mb-8">
        <Image
          src={post.image}
          alt={`Capa do post ${post.title}`}
          className="object-cover rounded-lg shadow-lg"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>
      <h1 className="font-cinzel font-bold text-4xl p-4">{post.title}</h1>
      <p className="font-raleway text-gray-500 text-sm">{post.date}</p>
      <div className="prose lg:prose-xl">
        <p>{post.summary}</p>
      </div>
      <div>
        <LikeButton />
      </div>
    </article>
  );
}
