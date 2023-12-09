import styled from 'styled-components';
const colors = {
    naranja: '#FFA500', // Este debería ser el color exacto del logo
    grisOscuro: '#333333',
    crema: '#F5F5DC',
    blanco: '#FFFFFF',
  };
  
  // Componentes styled
  const StyledNav = styled.nav`
    background-color: ${colors.grisOscuro};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  `;
  
  const MenuList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  `;
  
  const MenuItem = styled.li`
    padding: 0 2rem;
  `;
  
  const MenuLink = styled.a`
    color: ${colors.blanco};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  
    &:hover {
      color: ${colors.naranja};
    }
  `;

const MenuBar = () => {
  return (
    <StyledNav>
      <MenuList>
        <MenuItem><MenuLink href="#home">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#about">Informacion</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#services">Precio</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#contact">Contacto</MenuLink></MenuItem>
      </MenuList>
    </StyledNav>
  );
}

export default MenuBar;
