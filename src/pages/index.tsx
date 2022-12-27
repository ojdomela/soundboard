import type { Asset } from "contentful";
import Head from "next/head";
import { useState, useEffect } from "react";
import { getAssets } from "../../contentful";
import AudioPlayer from "../components/AudioPlayer";
import VolumeControls from "../components/VolumeControls";
import { Container, Title, Button, Main } from "./styles";

export async function getStaticProps() {
  const assets = await getAssets();
  const items = assets.items;
  return {
    props: {
      items,
    },
  };
}

interface Props {
  items: Asset[];
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Soundboard({ items, isDarkMode, setDarkMode }: Props) {
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Soundboard</Title>
        <VolumeControls volume={volume} setVolume={setVolume} />
        <Button onClick={() => setDarkMode(prev => !prev)}>Swap to dark mode?</Button>
        <Container>
          {items.map((item) => (
            <li key={item.sys.id}>
              <AudioPlayer src={item.fields.file.url} title={item.fields.title} volume={volume} />
            </li>
          ))}
        </Container>
      </Main>
    </>
  );
}
