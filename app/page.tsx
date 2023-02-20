import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex items-center mx-auto w-full">
        <Image
          className="rounded-full"
          src={
            "https://cdnb.artstation.com/p/users/avatars/000/482/999/large/17ef7683f7f13c178c8456d90a9e9b69.jpg?1618685082"
          }
          alt={"Ariel's Profile Image"}
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
