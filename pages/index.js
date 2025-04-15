import styled from 'styled-components';
import Header from '../components/Header';


export default function Home() {
  return (
    <MainContainer>
      <div>
        <Header></Header>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;
