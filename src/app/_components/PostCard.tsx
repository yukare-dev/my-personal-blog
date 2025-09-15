import Link from "next/link";
import Image from "next/image";
import { Post } from "../_lib/definition";

type PostCardProps = Post;

export default function PostCard({
  title,
  summary,
  date,
  image,
  slug,
}: PostCardProps) {
  return (
    <article className="p-4 backdrop-blur-[2px] rounded-4xl shadow-md hover:shadow-md transition-shadow">
      <Link href={`/posts/${slug}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={`Capa do post ${title}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="font-cinzel font-bold">{title}</h2>
          <p className="font-raleway text-xs">{date}</p>
          <span className="font-raleway">{summary}</span>
        </div>
      </Link>
      <Link href={`/posts/${slug}`} className="text-blue-400 font-semibold">
        more
      </Link>
    </article>
  );
}
