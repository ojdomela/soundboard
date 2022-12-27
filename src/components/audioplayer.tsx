import { useRef, useState, useEffect } from "react";

interface Props {
  src: string;
  volume: number;
  title: string;
}

const AudioPlayer: React.FC<Props> = ({ src, volume, title }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(src) : undefined
  );
  const intervalRef = useRef<NodeJS.Timer | undefined>();
  const isReady = useRef(false);

  const { duration } = audioRef.current || {};

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    }
    audioRef.current.volume = volume;
  }, [src, volume]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
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
    <div>
      <h2>{title}</h2>
      <button onClick={() => setIsPlaying(true)}>Play this file</button>
      <input
        type="range"
        min={0}
        max={duration ? duration : `${duration}`}
        value={progress}
        step={0.1}
        onChange={(e) => onScrub(Number(e.target.value))}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />
    </div>
  );
};

export default AudioPlayer;
