import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="font-cinzel font-bold text-lg">about me</h1>
      <span>
        “hey, grab your cup of coffee, get comfy, and let me introduce myself.
        I’m Stephanny Yukare — a psychologist, now diving into my second major
        in Systems Development. important things you have to know about me: I
        LOVE books, coffee, and games (sometimes all at once). & I love turning
        ideas into something that can truly make an impact. my world is this mix
        of psychology, tech, stories, and coffee. & that’s where I want to
        create things that connect people, spark emotions, and maybe even change
        a little piece of reality.”
      </span>
      <p>find me:</p>
      <Link href="/">Linkedin</Link>
      <Link href="/">GitHub</Link>
    </div>
  );
}
