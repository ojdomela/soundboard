import {
  Header,
  Title,
  HamburgerButton,
  Wrapper,
} from "./styles";
import Controls from "./Controls";

interface Props {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({
  isDarkMode,
  setDarkMode,
  volume,
  setVolume,
  collapsed,
  setCollapsed
}: Props) => {

  return (
    <>
      <Header>
        <Wrapper>
          <Title>Soundboard</Title>
          <Controls volume={volume} setVolume={setVolume} collapsed={collapsed} isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
          <HamburgerButton onClick={() => setCollapsed(prev => !prev)}>
            {collapsed ? 'Show' : 'Hide'} Controls
          </HamburgerButton>
        </Wrapper>
      </Header>
    </>
  );
};

export default Navbar;
