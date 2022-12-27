import { useState, useEffect, useRef } from "react";
import { isMainThread } from "worker_threads";
import { Description, Slider } from "./styles";

interface Props {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioElement: HTMLAudioElement | undefined;
}

const AudioProgressBar = ({ isPlaying, setIsPlaying, audioElement }: Props) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | undefined>();

  useEffect(() => {
    const handler = () => {
      setDuration(audioElement!.duration);
    };
    audioElement?.addEventListener("loadedmetadata", handler);
    return () => {
      audioElement?.removeEventListener("loadedmetadata", handler);
    };
  }, [audioElement]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioElement?.play();
      startTimer();
    } else {
      audioElement?.pause();
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioElement!.ended) {
        setIsPlaying(false);
      }
      setProgress(audioElement!.currentTime);
    }, 100);
  };

  const onScrub = (value: number) => {
    clearInterval(intervalRef.current);
    audioElement!.currentTime = value;
    setProgress(audioElement!.currentTime);
  };

  const progressString = `${Math.floor(progress / 60)}:${String(
    Math.floor(progress % 60)
  ).padStart(2, "0")}`;
  const durationString = `${Math.floor(duration / 60)}:${String(
    Math.floor(duration % 60)
  ).padStart(2, "0")}`;

  return (
    <>
      <Description>{`${progressString} / ${durationString}`}</Description>
      <Slider
        type="range"
        min={0}
        max={duration}
        value={progress}
        step={0.1}
        onChange={(e) => onScrub(Number(e.target.value))}
      />
    </>
  );
};

export default AudioProgressBar;
