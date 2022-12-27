import { useRef, useState, useEffect } from "react";
import AudioProgressBar from "./audioprogressbar";

interface Props {
  src: string;
  volume: number;
  title: string;
}

const AudioPlayer: React.FC<Props> = ({ src, volume, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | undefined>(undefined);

  useEffect(() => {
    if (!audioElement) {
      const audio = new Audio(src);
      audio.volume = volume;
      setAudioElement(audio);
    } else {
      audioElement.volume = volume;
    }    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  useEffect(() => {
    return () => {
      audioElement?.pause();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
      <AudioProgressBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} />
    </div>
  );
};

export default AudioPlayer;
