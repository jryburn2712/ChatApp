import styled from "styled-components";

export const App = () => {
    return (
        <Container>
            <ContainerBanner/>
            <MainLayout>

                <SidePanelContainer>This is the OpenChatsPanel Container
                    {/* Remove the text and put the OpenChatPanel here.*/}
                </SidePanelContainer>

                <MainChatContainer>
                    This is the Main Chat Container
                </MainChatContainer>

            </MainLayout>
        </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e4e2de;
`

const ContainerBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 13%;
  background-color: #00a884;
`

const MainLayout = styled.div`
  position: absolute;
  left: 0;
  top: 2%;
  right: 0;
  display: grid;
  grid-template-columns: 3fr 7fr;
  max-width: 84%;
  height: 95%;
  margin: 0 auto;
  background-color: white;
  -webkit-box-shadow: 5px 5px 14px -9px #000000;
  box-shadow: 5px 5px 14px -9px #000000;
`

const SidePanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`

const MainChatContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`


