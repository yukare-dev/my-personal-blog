"use cliente";

import { useState } from "react";
import { createPost } from "@/app/actions";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  return (
    <form action={createPost} className="flex flex-col gap-4">
      <h1>make new post</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="summary"
        placeholder="Post summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <textarea
        name="content"
        placeholder="Complete post content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Post
      </button>
    </form>
  );
}
