import PostCard from "./_components/PostCard";
import fs from "fs";
import path from "path";
import { Post } from "./_lib/definition";

function getPosts(): Post[] {
  const filePath = path.join(process.cwd(), "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex items-center justify-center p-8">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="font-cinzel text-lg font-bold">whispers of yu</h1>
        </div>
        <div>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
              slug={post.slug}
            ></PostCard>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
