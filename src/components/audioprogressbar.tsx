import { useState, useEffect, useRef } from "react";

interface Props {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.MutableRefObject<HTMLAudioElement | undefined>;
}

const AudioProgressBar = ({ isPlaying, setIsPlaying, audioRef }: Props) => {
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | undefined>();

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current!.ended) {
        setIsPlaying(false);
      }
      setProgress(audioRef.current!.currentTime);
    }, 100);
  };

  const onScrub = (value: number) => {
    clearInterval(intervalRef.current);
    audioRef.current!.currentTime = value;
    setProgress(audioRef.current!.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  return (
    <input
      type="range"
      min={0}
      max={audioRef.current?.duration || 0}
      value={progress}
      step={0.1}
      onChange={(e) => onScrub(Number(e.target.value))}
      onMouseUp={onScrubEnd}
      onKeyUp={onScrubEnd}
    />
  );
};

export default AudioProgressBar;
