import styled from "styled-components";

const RegionCardStyled = styled.div`
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap:2.5rem;
    padding: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0px 4px 4px 0px #00000040;
    justify-content: center;
    padding: 1rem;
  }

  .card_title {
    font-size: ${({ theme }) => theme.sizes.xl.fontSize};
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .card_body {
    display: flex;
    flex-direction: column;
  }

  .status_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .status_text {
    display: flex;
    flex-direction: column;
  }

  .status_label {
    font-size: 0.875rem;
    color: #6c757d;
  }

  .status_value {
    font-size: ${({ theme }) => theme.sizes.lg.fontSize};
  }

  .confirmed {
    color: ${({ theme }) => theme.colors.primary};
  }

  .recovered {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .death {
    color:${({ theme }) => theme.colors.danger};
  }

`;

export default RegionCardStyled;
