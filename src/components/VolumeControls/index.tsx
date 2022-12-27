import { Title, Slider, Container } from "./styles";

interface Props {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const VolumeControls: React.FC<Props> = ({ volume, setVolume }) => {
  return (
    <Container>
      <Title>Volume:</Title>
      <Slider
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
    </Container>
  );
};

export default VolumeControls;
