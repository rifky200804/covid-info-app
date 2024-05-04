
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import data from '../utils/constants/provinces.js'
import Form from "../components/FormAddDataCovid/FormAddDataCovid.jsx";

function Main(){
    // const title = "Provinsi"
    // const subTitle = "Data Covid Berdasarkqan Provinsi"
    return(
        <>
            <Hero />
            <Summary title="Indonesia" subTitle="Data Covid Berdasarkan Indonesia" data={data} type="indonesia" />
            <Summary title="Provinsi" subTitle="Data Covid Berdasarkan Provinsi" data={data} type="provinsi" />
            <Form title="Provinsi" subTitle="Data Covid Berdasarkan Provinsi" data={data} />
        </>
    )
}
function Home() {
    return (
        <>
            <Header />
            <Main/>
            <Footer/>
        </>
    );
}

export default Home;