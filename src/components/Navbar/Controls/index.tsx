import { Title, Slider, Container } from "./styles";

interface Props {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const Controls: React.FC<Props> = ({ volume, setVolume }) => {
  return (
    <Container>
      <Title><span>Volume:</span><span>{Math.round(volume*100)}%</span></Title>
      <Slider
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        percentage={volume*100}
      />
    </Container>
  );
};

export default Controls;
