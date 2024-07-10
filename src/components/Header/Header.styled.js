import styled from "styled-components";

const HeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;

  .header_brand {
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.xxl.fontSize};
    margin-bottom: 0;
    cursor: pointer;
  }

  .header_list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 1rem;
  }

  .link_item {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }

  .active {
    color: ${({ theme }) => theme.colors.blackColor};
  }

  .header_right {
    display: flex;
  }

  .header_right_hide {
    display: none;
  }

  .header_left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header_item {
    margin-bottom: 1rem;
    cursor: pointer;

    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .header_brand {
      margin-bottom: 0;
    }

    .header_list {
      flex-direction: row;
    }
  }
`;

export default HeaderStyled;
