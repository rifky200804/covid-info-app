import styled from "styled-components";

const AboutStyled = styled.div`
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 3rem !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
}

.title {
  font-size: ${({ theme }) => theme.sizes.xxl.fontSize};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
}

.about_description {
  font-size: color: ${({ theme }) => theme.sizes.lg.fontSize};
  line-height: 1.6;
  margin-bottom: 20px;
}

p{
  font-size: color: ${({ theme }) => theme.sizes.lg.fontSize};
  line-height: 1.6;
  margin-bottom: 20px;
}

.visi_misi {
  margin-bottom: 20px;
}
.details {
  margin-bottom: 20px;
}

.contact {
  margin-bottom: 20px;
}

`;

export default AboutStyled;
