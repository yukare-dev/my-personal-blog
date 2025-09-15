import PostCard from "./_components/PostCard";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Post } from "./_lib/definition";

function getPosts(): Post[] {
  const filePath = path.join(process.cwd(), "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default function Home() {
  const posts = getPosts();

  return (
    <div className="flex items-center justify-center p-8">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="font-cinzel text-lg font-bold text-center">
          whispers of yu
        </h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/create"
            className="bg-gray-800 text-white font-bold font-raleway px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm"
          >
            + Create new post
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
              slug={post.slug}
              image={post.image}
            ></PostCard>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
