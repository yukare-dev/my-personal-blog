"use client";

import { useState } from "react";
import { createPost } from "@/app/actions";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  return (
    <form
      action={createPost}
      className="flex flex-col w-1/2 gap-4 font-raleway justify-self-center"
    >
      <h1 className="font-cinzel text-center py-8">Create new post</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded-2xl shadow-md border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 outline-0"
        required
      />
      <input
        type="text"
        name="summary"
        placeholder="Post summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="p-2 border rounded-2xl shadow-md border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 outline-0"
        required
      />
      <textarea
        name="content"
        placeholder="Complete post content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border rounded-2xl shadow-md border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 outline-0"
      />
      <div>
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-raleway"
        >
          Upload image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="block w-full text-sm text-gray-900 rounded-2xl cursor-pointer shadow-md bg-transparent hover:bg-stone-300 dark:text-gray-400 focus:outline-none dark:bg-gray-700
               
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-stone-200 file:text-stone-700
          hover:file:bg-stone-400"
          accept="image/* required"
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 w-full cursor-pointer text-white p-2 rounded-lg shadow-md hover:bg-green-700"
      >
        Post
      </button>
    </form>
  );
}
