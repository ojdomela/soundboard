import { Header, Title, Button } from "./styles";


interface Props {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ isDarkMode, setDarkMode }: Props) => {
  return (
    <>
      <Header>
        <Title>Soundboard</Title>
        <Button onClick={() => setDarkMode((prev) => !prev)}>
          {isDarkMode ? "Light" : "Dark"} mode
        </Button>
      </Header>
    </>
  );
};

export default Navbar;
