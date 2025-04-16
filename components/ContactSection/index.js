import styled from 'styled-components';

export default function ContactSection() {
    return (
    <Section id="hero">
        <TextContent>
        <h1>Transformando o seu sorriso com naturalidade</h1>
        <button
            onClick={() => {
                window.open('https://wa.me/5512996493530?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.', '_blank');
              }}

        >Agendar o meu procedimento</button>
        </TextContent>

        <ImageContent>
        <img src="files/IMG_3630.JPEG" alt="Sorrisos transformados" />
        </ImageContent>
    </Section> )
}

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