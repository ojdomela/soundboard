import type { Asset } from "contentful";
import Head from "next/head";
import { useState } from "react";
import { getAssets } from "../../contentful";
import AudioPlayer from "../components/audioplayer";

export async function getStaticProps() {
  const assets = await getAssets();
  const items = assets.items;
  return {
    props: {
      items,
    },
  };
}

export default function Soundboard({ items }: { items: Asset[] }) {
  const [volume, setVolume] = useState(0.5);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Soundboard</h1>
        <h2>Volume:</h2>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
        <ul>
          {items.map((item) => (
            <li key={item.sys.id}>
              <AudioPlayer src={item.fields.file.url} title={item.fields.title} volume={volume} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
