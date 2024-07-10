import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  color: #fff;

  .footer {
    display: flex;
    flex-direction: column;
  }

  .link_item {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }

  .active {
    color: ${({ theme }) => theme.colors.blackColor};
  }

  .footer_brand {
    font-weight: 500;
    font-size:${({ theme }) => theme.sizes.xxl.fontSize};
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }

  .footer_list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 1rem;
  }

  .footer_left {
    display: flex;
    flex-direction: column;
  }

  .footer_item {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .footer_brand {
      margin-bottom: 0;
    }

    .footer_list {
      flex-direction: row;
    }

    .footer_item {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {

  }
`;

export default FooterStyled;
