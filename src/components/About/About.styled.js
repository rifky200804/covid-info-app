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

.btn_primary{
    border: 0px solid #06D6A0;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
    border-radius: 5px;
    width: 100%;
    height: 43px;
    color: #FFFFFF;
    font-size: ${({ theme }) => theme.sizes.md.fontSize};
    cursor: pointer;
}

.developer{
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width:100%;
    align-items: center;
}

@media (min-width: 768px) {
    .developer{
        display:flex;
        flex-direction: row;
        width: 100%;
        max-width:100%;
        overflow: none;
    }
    
  }

.img_developer{
    width: 200px;
    border-radius: 50%
}

.contact_developer{
    margin-left: 2rem;
}

.description_developer{
}

`;

export default AboutStyled;
