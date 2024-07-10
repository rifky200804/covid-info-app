import styled from "styled-components";

const SummaryStyled = styled.div`
  .container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 2rem 0rem;
  }

  .summary {
    width: 100%;
    padding: 1rem 2rem 4rem 2rem;
    max-width: 1300px;
  }

  .summary_head {
    text-align: center;
  }

  .summary_title {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.sizes.display.fontSize};
    font-weight: 500;
  }

  .summary_sub_title {
    font-size: 1.59rem;
    color: #118ab2;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

export default SummaryStyled;
