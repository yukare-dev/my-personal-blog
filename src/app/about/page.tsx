import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      <div className="grid grid-cols-2 gap-6 p-8 w-1/2">
        <div className="flex flex-col items-center p-8 backdrop-blur-[2px] rounded-4xl shadow-md">
          <Image
            src="/profile.png"
            alt="Foto de perfil da desenvolvedora Stephanny Yukare"
            width={200}
            height={200}
            className="rounded-full shadow-lg object-cover"
            priority
          ></Image>
          <p className="font-raleway pt-6">
            Stephanny Yukare Ferreira dos Santos
          </p>
          <p className="font-raleway text-sm">yukare1998@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4 p-8 text-center backdrop-blur-[2px] rounded-4xl shadow-md">
          <h1 className="font-cinzel font-bold text-lg">about me</h1>
          <p className="font-raleway text-center ">
            hello! grab your cup of coffee, get comfy, and let me introduce
            myself.
          </p>
          <p className="font-raleway text-center text-sm">
            I’m Stephanny Yukare — a psychologist, now diving into my second
            major in Systems Development. There's some important things you have
            to know about me: I LOVE books, coffee, and games (sometimes all at
            once). & I love turning ideas into something that can truly make an
            impact. My world is this mix of psychology, tech, stories, and
            coffee. & that’s where I want to create things that connect people,
            spark emotions, and maybe even change a little piece of reality.
          </p>
        </div>
      </div>
      <div className="flex gap-4 p-8 items-center justify-center backdrop-blur-[2px] rounded-4xl shadow-md w-64">
        <Link href="https://www.linkedin.com/in/yukare/">
          <FiLinkedin size={20} />
        </Link>
        <Link href="https://github.com/yukare-dev">
          <FiGithub size={20} />
        </Link>
        <Link href="https://www.instagram.com/yukaresz">
          <FiInstagram size={20} />
        </Link>
      </div>
    </div>
  );
}
