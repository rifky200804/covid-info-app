import styled from "styled-components";

const MenuButtonStyled = styled.button`
  background: none;
  border: none;
  display: flex;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default MenuButtonStyled;
