
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import data from '../utils/constants/provinces.js'
import indonesia from '../utils/constants/indonesia.js'
import FormAddDataCovid from "../components/FormAddDataCovid/FormAddDataCovid";
import { useState } from "react";
function Main(){
    let [dataTable,setDataTable] = useState(data.provinces)
    let [summaryCard,setSummaryCard] = useState(indonesia.indonesia)
    return(
        <>
            <Hero />
            <Summary title="Indonesia" subTitle="Data Covid Berdasarkan Indonesia" data={summaryCard} type="indonesia" />
            <Summary title="Provinsi" subTitle="Data Covid Berdasarkan Provinsi" data={dataTable} type="provinsi" />
            <FormAddDataCovid dataTable={dataTable} setDataTable={setDataTable} summary={summaryCard} setSummary={setSummaryCard} />
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