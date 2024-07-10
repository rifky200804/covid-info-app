import styled from 'styled-components';

const FormAddDataCovidStyled = styled.div`
  .main_content {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #F8F9FA;
  }

  .container {
    padding: 4rem 2rem;
    width: 100%;

    @media (min-width: 992px) {
      max-width: 1300px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .form_left {
    margin-bottom: 0rem 1rem;
  }

  .form_right {
    margin: 0rem 3rem;
  }

  .form_title_bg {
    display: flex;
    justify-content: center;
  }

  .form_title {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.display.fontSize};
    font-weight: 500;
  }

  .form_label {
    font-size: 1rem;
    color: gray;
    margin-bottom: 0.2rem;
  }

  .form_group {
    margin-bottom: 1rem;
  }

  .btn_primary {
    border: 0px solid #06D6A0;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    width: 100%;
    height: 43px;
    color: #FFFFFF;
    font-size: ${({ theme }) => theme.sizes.xl.fontSize};
    cursor: pointer;
  }

  .form_image {
    display: none;
  }

  @media (min-width: 768px) {
    .form {
      display: flex;
      flex-direction: column;
    }

    .form_image {
      display: none;
    }

    .form_title_bg {
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    .form_image {
      display: flex;
      width: 600px;
      height: 400px;
    }

    .form {
      margin: 0 3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      text-align: left;
    }

    .form_left {
      flex-basis: 40%;
    }

    .form_right {
      align-items: center;
      flex-basis: 60%;
    }

    .form_title_bg {
      display: flex;
      justify-content: start;
    }

    .form_title {
      text-align: left;
    }
  }
`;

export default FormAddDataCovidStyled;
