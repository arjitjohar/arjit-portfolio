import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  let pallete = {
    Gainsboro: "dcdcdd",
    Silver: "c5c3c6",
    "Davys Grey": "46494c",
    "Black Coral": "4c5c68",
    "Blue Munsell": "1985a1",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Arjit Johar | Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** animated background */}

      {/** navigation bar with sections called about me, demos, interests, resume, contact me */}

      {/** animated text showing name in the center of the screen */}

      {/** footer with contact information bottom right */}

      {/** picture of myself should animate in from thin air - looks baller as fuck */}

      {/** color pallete to follow: https://coolors.co/dcdcdd-c5c3c6-46494c-4c5c68-1985a1 */}
    </div>
  );
}
