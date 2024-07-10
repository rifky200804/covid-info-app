import styled from "styled-components";

const CardStyled = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 80%;
    min-width: 390px;
    margin-bottom: 1rem;
    height: 300px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0px 4px 4px 0px #00000040;
    justify-content: center;
    align-items: center;

    @media (min-width: 992px) {
      width: 33%;
    }
  }

  .card_title {
    font-size: ${({ theme }) => theme.sizes.xl.fontSize};

    @media (max-width: 455px) {
      font-size: ${({ theme }) => theme.sizes.xl.fontSize};
    }
  }

  .card_body {
    font-size: ${({ theme }) => theme.sizes.display.fontSize};

    @media (max-width: 455px) {
      font-size: ${({ theme }) => theme.sizes.x3l.fontSize};
    }
  }
`;

export default CardStyled;
