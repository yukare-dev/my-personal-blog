import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-cinzel font-bold">404</h2>
      <p className="text-xl mb-4">page not found</p>
      <Link href="/" className="text-blue-500 hover:underline">
        back to home
      </Link>
    </div>
  );
}
