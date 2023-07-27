import React from "react";
import { Container } from "../component/Styles/Container/Container.styled";
import { Header, MainHeader } from "../component/Styles/Header/Header.styled";

interface Props {}
const Main: React.FC<Props> = () => {
  return (
    <Container className="Main">
      <Header>
        <MainHeader>
          <h1>Studio CLIP</h1>
          <h2>스튜디오 클립</h2>
        </MainHeader>
      </Header>
    </Container>
  );
};
export default Main;
