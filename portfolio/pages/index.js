import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title> Arjit's Portfolio!</title>
        <link rel="icon" href="/arjitLogo.png" />
      </Head>

      {/*video banner*/}
      <div>
        <video autoPlay className="object-cover h-full w-full">
          <source src="/backgroundVideo.mp4" type="video.mp4" />
        </video>
        <div className="relative bg-gray-700 bg-opacity-40 h-full">
          <div>
            <Image> </Image>
          </div>
        </div>
      </div>
    </div>
  );
}
