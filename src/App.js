import {device} from "./util";


import {firebaseConfig} from "./config";
import styled from "styled-components";
import {FireBaseTest} from "./FireBaseTest";

export const App = () => {
  return (
    <MainLayout>
      <FireBaseTest/>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and ${device.laptop} {
    max-width: 70%;
    margin: 0 auto;
  }
`
