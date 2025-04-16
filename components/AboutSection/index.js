import styled from 'styled-components';

export default function AboutSection() {
  return (
    <Section id="minha-historia">
      <ImageContainer>
        <img src="files/DSC_5077 copiar.jpg" alt="Dra. Vitória Santos Bazler" />
      </ImageContainer>

      <TextContainer>
        <h2>Dra. Vitória Santos Bazler</h2>
        <span>Lentes em resina</span>

        <p>
          Muito prazer, eu sou a <strong className="highlight">Dra. Vitória Santos Bazler</strong>, tenho 28 anos, sou casada e moro em São José dos Campos.
        </p>
        <p>
          teste - teste - teste - teste - teste - teste - teste - teste -  <strong className="soft">teste - teste - teste - teste - teste - </strong>
        </p>
        <p>
        teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - teste - 
        </p>
        <p>
        teste - teste - teste - teste - teste - teste - 
        </p>
        <p>
        teste - teste - teste - teste - teste -  <strong className="highlight">teste - teste - </strong>. teste - teste - teste - teste -  teste - <strong className="soft">teste - teste - teste - </strong>.
        </p>
      </TextContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 1.5rem;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 6rem 5%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    max-width: 500px;
  }
`;

const TextContainer = styled.div`
  max-width: 700px;

  h2 {
    font-size: 2rem;
    color: #b9986b;
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 1rem;
    display: inline-block;
    margin-bottom: 2rem;
    color: #999;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
    color: #333;
  }

  strong.highlight {
    color: #b9986b;
    font-weight: 600;
  }

  strong.soft {
    color: #d89c84;
    font-weight: 500;
  }
`;