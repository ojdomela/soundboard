import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Button, Indicator } from "../styles";
import { Title, Slider, Container, Wrapper } from "./styles";

interface Props {
  volume: number;
  setVolume: (volume: number) => void;
  collapsed: boolean;
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

const Controls: React.FC<Props> = ({ volume, setVolume, collapsed, isDarkMode, setDarkMode }) => {
  return (
    <Container collapsed={collapsed}>
      <Wrapper>
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
      </Wrapper>
          <Button toggled={isDarkMode} onClick={() => setDarkMode(!isDarkMode)}>
            <Indicator toggled={isDarkMode}>
              {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
            </Indicator>
          </Button>
    </Container>
  );
};

export default Controls;
