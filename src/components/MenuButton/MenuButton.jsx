import MenuButtonStyled from './MenuButton.styled';

function MenuButton({ onClick, children }) {
  return (
    <MenuButtonStyled onClick={onClick}>
      {children}
    </MenuButtonStyled>
  );
}

export default MenuButton;
