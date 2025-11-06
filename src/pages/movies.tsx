import styled from "@emotion/styled";
import Tabs from "../components/Tabs";

const Background = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-image: url("https://cineset.com.br/wp-content/uploads/2015/07/unnamed1.jpg");
  background-size: cover; /* Ensures the image covers the entire area, maintaining aspect ratio */
  background-position: center; /* Centers the image within the viewport */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-attachment: fixed; /* Keeps the image fixed while content scrolls (optional) */
  margin: 0; /* Removes default body margin */
  padding: 0; /* Removes default body padding */
  height: 65vh; /* Ensures the body takes up the full viewport height */
  width: 100vw; /* Ensures the body takes up the full viewport width */
  box-shadow: inset 20vw 200px 50px rgba(1, 1, 1, 0.5);
`;

const Header = styled.div`
  align-self: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 5rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 6rem;
`;

const Heading = styled.span`
  font-size: 2rem;
  opacity: 0.5;
`;

const SideBar = styled.div`
  background: rgba(1, 1, 1, 0.5);
  width: 30vw;
  display: flex;
`;

const Footer = styled.div`
  height: 35vh;
  background: #0f1316;
  padding-left: 5rem;
  padding-top: 2rem;
`;

export default function MoviesPage() {
  return (
    <>
      <Background>
        <Header>
          <Title>Penny Dreadful</Title>
          <Heading>80% INDICADO / CIENCIA FICCION / 2015 / EUA / 14</Heading>
        </Header>
        <SideBar>
          <h1>SIDE BAR</h1>
        </SideBar>
      </Background>
      <Footer>
        <Tabs />
      </Footer>
    </>
  );
}
