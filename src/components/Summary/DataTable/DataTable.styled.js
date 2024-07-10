import styled from "styled-components";

const DataTableStyled = styled.div`
  .main_content {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main_table {
    display: flex;
    min-width: 100%;
    margin: 0rem 1rem;

    @media (min-width: 768px) {
      justify-content: center;
      overflow-x: hidden;
    }

    @media (min-width: 992px) {
      justify-content: center;
      overflow-x: none;
    }
  }

  .datatable {
    border-spacing: 0;
    border: 1px solid ${({ theme }) => theme.colors.blackColor};
    width: 850px;

    @media (min-width: 992px) {
      overflow: scroll;
      max-width: 1300px;
    }
  }

  .table_header {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.grayColor};
    padding: 0.5rem;
  }

  .table_content {
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.grayColor};
    padding: 0.5rem;
    text-align: center;
  }
`;

export default DataTableStyled;
