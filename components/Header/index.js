import styled from 'styled-components';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav style={{ backgroundColor: '#000' }}>
      <NavContainer>
        
        <Logo src="files/LOGOTIPO.png" alt="Logo" /> 

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} color='#E0CA90' />}
        </MenuButton>

        <NavLinks isOpen={isOpen}>
            
          <a style={{color: '#E0CA90' }} href="#">Página Inicial</a>
          <a style={{color: '#E0CA90' }} href="#minha-historia">Minha História</a>
          <a style={{color: '#E0CA90' }} href="#casos">Casos</a>
          <a style={{color: '#E0CA90' }} href="#depoimentos">Depoimentos</a>
          <a style={{color: '#E0CA90' }} href="#endereco">Endereço</a>
          
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  width: 100px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 1.5rem;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row;
    position: static;
    gap: 2rem;
    background: none;
    padding: 0;

    a {
      font-size: 1rem;
    }
  }
`;
