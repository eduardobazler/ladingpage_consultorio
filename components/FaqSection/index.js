import { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'As lentes em resina desgastam os dentes?',
    answer: 'Não. O procedimento é minimamente invasivo, e na maioria dos casos não há necessidade de desgaste nos dentes naturais.',
  },
  {
    question: 'Quanto tempo dura o procedimento?',
    answer: 'O procedimento é rápido e pode ser feito em apenas uma sessão após o planejamento. Cada caso é avaliado individualmente.',
  },
  {
    question: 'As lentes ficam com aparência artificial?',
    answer: 'Não. Utilizamos técnicas e materiais que entregam um resultado extremamente natural, personalizado para o seu sorriso.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="duvidas">
      <Title>Principais Dúvidas</Title>
      <FaqList>
      {faqs.map((faq, index) => (
        <FaqItem key={index} isOpen={openIndex === index}>
            <Question onClick={() => toggle(index)}>
            {faq.question}
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Question>
            <AnswerWrapper isOpen={openIndex === index}>
            <Answer>{faq.answer}</Answer>
            </AnswerWrapper>
        </FaqItem>
    ))}
      </FaqList>
    </Section>
  );
}

const Section = styled.section`
  padding: 4rem 1.5rem;
  background-color: #f9f7f4;
  @media (min-width: 768px) {
    padding: 5rem 10%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #b9986b;
  margin-bottom: 2rem;
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItem = styled.div`
  background: white;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
`;

const Question = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 1rem 1.25rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;


const AnswerWrapper = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.4s ease;
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? '1rem 1.25rem' : '0 1.25rem')};
`;

const Answer = styled.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
`;