import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

export const dynamic = "force-dynamic",
  runtime = "edge";

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  url: string;
  title: string;
  image?: string;
}

interface Social {
  url: string;
  title: string;
}

export default async function Home() {
  const data: Data | undefined = await get("linktree");

  if (!data) {
    redirect("https://linktr.ee/selenagomez");
  }

  return (
    <div>
      <main className="px-10 min-h-screen">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Ariel Ramsey Poh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Ohayo
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col text-center p-10 items-center">
            <h2 className="text-5xl py-2 text-teal-900 font-NotoSans font-semibold">ARIEL RAMSEY POH</h2>
            <div className="grid grid-cols-3 gap-4 items-center py-4">
              <h3 className="text-2xl py-1 border-teal-900 border-r-2 px-4">Animator</h3>
              <h3 className="text-2xl py-1 border-teal-900 border-r-2 px-4">Character Designs</h3>
              <h3 className="text-2xl py-1 px-4">Character Designs</h3>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum dolorem maiores officiis expedita omnis laboriosam, quam odit obcaecati at modi ipsum
              reprehenderit animi, sint molestiae hic! Perspiciatis excepturi, corrupti reiciendis perferendis nemo nobis fuga ratione labore deserunt nostrum esse omnis dolores
              nulla quia. Eligendi repellendus maiores obcaecati dolorem inventore.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
        </section>
        <section className="flex flex-col items-center mx-auto w-full mt-16 px-8">
          <Image
            className="rounded-full"
            alt={data.name}
            src={"https://cdnb.artstation.com/p/users/avatars/000/482/999/large/17ef7683f7f13c178c8456d90a9e9b69.jpg?1618685082"}
            width={80}
            height={80}
          />
          <h1 className="font-semibold mt-4 text-xl mb-8 text-">{data.name}</h1>
          <div className="flex items-center justify-center mx-auto w-auto gap-5">
            <a href="#" className="nav">
              Home
            </a>
            <a href="#" className="nav">
              About
            </a>
            <a href="#" className="nav">
              Contact
            </a>
            <a href="#" className="nav">
              Service
            </a>
          </div>
          <div>{data.name}</div>
        </section>
      </main>
    </div>
  );
}
