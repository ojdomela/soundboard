import { useRef, useState, useEffect } from "react";
import AudioProgressBar from "./audioprogressbar";

interface Props {
  src: string;
  volume: number;
  title: string;
}

const AudioPlayer: React.FC<Props> = ({ src, volume, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(src) : undefined
  );

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    }
    audioRef.current.volume = volume;
  }, [src, volume]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setIsPlaying(true)}>Play this file</button>
      <AudioProgressBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />
    </div>
  );
};

export default AudioPlayer;
