import styled from 'styled-components';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import GoogleReviews from '../components/GoogleReviews';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <MainContainer>
        <Header />
        <ContactSection />
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
