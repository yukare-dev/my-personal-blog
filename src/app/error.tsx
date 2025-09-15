"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold font-cinzel">
        somethings went wrong! :(
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white p-2 rounded"
      >
        try again
      </button>
    </div>
  );
}
