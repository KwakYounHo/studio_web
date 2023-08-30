import React from "react";
import { Container } from "../component/Styles/Container/Container.styled";
import { Header, MainHeader } from "../component/Styles/Header/Header.styled";

interface Props {}
const Main: React.FC<Props> = () => {
  return (
    <Container className="Main">
      <Header>
        <MainHeader>
          <h1 className='mainTitle koulen'>Studio CLIP</h1>
          <h2 className='subTitle koulen'>Myanmar</h2>
          <p className='article'>STUDIO CLIP Corp.<br />Room No.(I), 7th floor, Royal Mg Bamar Residence, Dhamar Yone Street, Hlaing, Yangon, Myanmar<br />http://studioclip.video | +09 88413 9136</p>
        </MainHeader>
      </Header>
    </Container>
  );
};
export default Main;
