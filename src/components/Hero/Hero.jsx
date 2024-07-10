import HeroStyled from "./Hero.styled";
import heroImage from '../../assets/hero_medical_care.svg';

function Hero() {
    return (
        <HeroStyled>
            <div className="main_content">
                <div className="container">
                    <section className="hero">
                        <div className="hero_left">
                            <h1 className="hero_title">Covid ID</h1>
                            <h4 className="hero_genre">Monitoring Perkembangan Covid</h4>
                            <p className="hero_description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                            </p>
                            <button className="hero_button">Vaccine</button>
                        </div>
                        <div className="hero_right">
                            <img
                                className="hero_image"
                                src={heroImage}
                                alt="hero"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </HeroStyled>
    );
}

export default Hero;
