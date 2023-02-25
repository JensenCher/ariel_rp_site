import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import design from "../public/design.png";
import juice from "../public/orange_juice.png";
// import ToggleDark from "./ToggleDark";
// import { useState } from "react";

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
  // const [darkMode, setDarkMode] = useState(false);
  if (!data) {
    redirect("https://linktr.ee/selenagomez");
  }

  return (
    <div className="">
      {/* dark */}
      <main className="px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* min-h-screen */}
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-semibold">Ariel Ramsey Poh</h1>
            <ul className="flex items-center">
              <li>
                {/* <ToggleDark /> */}
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
            <h2 className="text-4xl py-2 text-teal-900 font-NotoSans font-semibold md:text-5xl ">ARIEL RAMSEY POH</h2>
            <div className="grid grid-cols-3 items-center py-4 text-center max-w-xl">
              <h3 className="text-xl py-1 border-teal-900 px-1">Animator</h3>
              <h3 className="text-xl py-1 border-teal-900 border-r-2 border-l-2 px-4 mx-2">Character Designs</h3>
              <h3 className="text-xl py-1 px-3 mx-2">Character Designs</h3>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span className="text-teal-500 font-bold">Quibusdam</span> cum dolorem maiores officiis expedita omnis
              laboriosam, quam odit obcaecati at modi ipsum reprehenderit animi, sint molestiae hic! <span className="text-teal-500 font-bold">Perspiciatis</span> excepturi,
              corrupti reiciendis perferendis nemo nobis fuga ratione labore deserunt nostrum esse omnis dolores nulla quia. Eligendi repellendus maiores obcaecati dolorem
              inventore.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://www.youtube.com/@6ftariel926" target="_blank" title="6ftariel926's YouTube">
              <AiFillYoutube />
            </a>
            <a href="https://www.instagram.com/arielramsey_poh/" target="_blank" title="Ariel's Instagram">
              <AiFillInstagram />
            </a>
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
        <section>
          <div>
            <h3 className="text-3xl py-1">Service I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis veniam accusantium doloremque et repellendus, provident aliquam neque earum! Laudantium?
            </p>
            <p className="text-md-py-2 leading-8 text-gray-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, non perferendis consectetur veniam aperiam debitis libero error repellendus dicta suscipit?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 bg-teal-50">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="lg:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae enim eligendi nihil ipsa dolore sequi harum aliquam officiis cumque voluptatum.
              </p>
              <h4 className="text-teal-600 py-4">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 bg-teal-50">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="lg:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae enim eligendi nihil ipsa dolore sequi harum aliquam officiis cumque voluptatum.
              </p>
              <h4 className="text-teal-600 py-4">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 bg-teal-50">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="lg:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae enim eligendi nihil ipsa dolore sequi harum aliquam officiis cumque voluptatum.
              </p>
              <h4 className="text-teal-600 py-4">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portobello</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span className="text-teal-500 font-bold">Quibusdam</span> cum dolorem maiores officiis expedita omnis
              laboriosam, quam odit obcaecati at modi ipsum reprehenderit animi, sint molestiae hic! <span className="text-teal-500 font-bold">Perspiciatis</span> excepturi,
              corrupti reiciendis perferendis nemo nobis fuga ratione labore deserunt nostrum esse omnis dolores nulla quia. Eligendi repellendus maiores obcaecati dolorem
              inventore.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image src={juice} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" alt="design" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={juice} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" alt="design" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={juice} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" alt="design" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={juice} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" alt="design" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={juice} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" alt="design" />
              </div>
              <div className="basis-1/3 flex-1">
                <Image src={juice} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" alt="design" />
              </div>
            </div>
            <div className="flex flex-col py-10">
              <h2 className="text-xl font-bold mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias molestias earum molestiae vero ex, modi, a nisi repellat quasi placeat nobis perferendis dolores.
                Ducimus ullam blanditiis quia libero? Est alias impedit error ipsam animi delectus, placeat earum magni dicta beatae, dolore nostrum accusamus perspiciatis voluptas
                aspernatur provident maiores possimus vel!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
