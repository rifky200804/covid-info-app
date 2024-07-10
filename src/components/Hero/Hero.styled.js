import styled from "styled-components";

const HeroStyled = styled.div`
  .main_content {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .container {
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;

    @media (min-width: 992px) {
      width: 100%;
      max-width: 1300px;
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 992px) {
      margin: 0 1rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  .hero_left {
    margin-bottom: 1rem;
    padding-right: 1rem;
    align-items: center;
    text-align: center;
    @media (min-width: 992px) {
       align-items: left;
       text-align: left;

      flex-basis: 40%;
    }
  }

  .hero_title {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-size:  font-size: ${({ theme }) => theme.sizes.x3l.fontSize};
    font-weight: 500;
  }

  .hero_genre {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.sizes.xl.fontSize};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .hero_description {
    color: #64748b;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .hero_button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color:${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  .hero_right {
    display: flex;
    justify-content: center;

  }

  .hero_image {
    max-width: 100%;
    height: 350px;
    border-radius: 25px;
  }
`;

export default HeroStyled;
