import { useState, useEffect } from "react";
import AudioProgressBar from "./AudioPlayerProgressBar";
import { Container, PlayButton, Title } from "./styles";

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
    <Container>
      <Title>{title}</Title>
      <PlayButton onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</PlayButton>
      <AudioProgressBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} />
    </Container>
  );
};

export default AudioPlayer;
