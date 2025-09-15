"use client";

import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <button
      onClick={handleLike}
      className="text-red-500 py-2 px-4 flex items-center gap-1"
    >
      <FiHeart className="cursor-pointer" /> {likes}
    </button>
  );
}
