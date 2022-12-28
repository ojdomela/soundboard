import { Header, Title, Button, Indicator } from "./styles";
import Controls from "./Controls";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

interface Props {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const Navbar: React.FC<Props> = ({
  isDarkMode,
  setDarkMode,
  volume,
  setVolume,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header>
        <Title>Soundboard</Title>
        <Controls volume={volume} setVolume={setVolume} />
        <Button
          toggled={isDarkMode}
          onClick={() => setDarkMode(!isDarkMode)}
        >
          <Indicator
            toggled={isDarkMode}
            className={!isLoaded ? "preload" : ""}
          >
            {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
          </Indicator>
        </Button>
      </Header>
    </>
  );
};

export default Navbar;
