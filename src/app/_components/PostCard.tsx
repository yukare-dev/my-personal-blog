import Link from "next/link";
import { Post } from "../_lib/definition";

type PostCardProps = Post;

export default function PostCard({
  title,
  summary,
  date,
  slug,
}: PostCardProps) {
  return (
    <article className="border rounded-lg p-4 shadow-md hover:shadow-md transition-shadow">
      <Link href={`/posts/${slug}`} className="block">
        <h2 className="font-cinzel">{title}</h2>
        <p className="font-raleway">{date}</p>
        <span className="font-raleway">{summary}</span>
      </Link>
      <Link href={`/posts/${slug}`} className="text-blue-600 font-semibold">
        more
      </Link>
    </article>
  );
}
