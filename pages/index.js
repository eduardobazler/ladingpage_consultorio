import styled from 'styled-components';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import GoogleReviews from '../components/GoogleReviews';

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Section id="hero">
      <TextContent>
        <h1>Transformando o seu sorriso com naturalidade</h1>
        <button>Agendar o meu procedimento</button>
      </TextContent>

      <ImageContent>
        <img src="files/IMG_3630.JPEG" alt="Sorrisos transformados" />
      </ImageContent>
    </Section>
    <AboutSection />
    <FaqSection />
    <GoogleReviews />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  align-items: center;
`;


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 5%;
  }
`;

const TextContent = styled.div`
  max-width: 500px;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #E0CA90;
    line-height: 1.3;
    margin-bottom: 2rem;
  }

  button {
    background-color: #cdb393;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;

    &:hover {
      background-color: #b9986b;
    }
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ImageContent = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;