import styled from 'styled-components';
import {Container} from '../../globalStyles';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
  background: #A8D6FD;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 50;
  width: 100%;
  position: fixed;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 100%;
`;
export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:hover {
    transform: scale(1.2);

    & > span:nth-child(2) {
      width: 2rem;
    }
  }

  span {
    height: 0.25rem;
    background: ${({open}) => open ? 'black' : 'black'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      width: 2rem;
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      width: 1.6rem;
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      width: 2rem;
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
