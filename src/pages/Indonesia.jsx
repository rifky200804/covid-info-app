
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import data from '../utils/constants/provinces.js'
import indonesia from '../utils/constants/indonesia.js'
import FormAddDataCovid from "../components/FormAddDataCovid/FormAddDataCovid";
import { useContext, useState } from "react";
import DefaultLayout from "../layout/DefaultLayout.jsx";
function Home() {
    let [summaryCard,setSummaryCard] = useState([])
    const [provinces,setProvinces] = useState([]);
    return (
        <>
            <DefaultLayout >
                <Hero />
                <Summary title="Indonesia Situation" subTitle="Data Covid Berdasarkan Indonesia" data={summaryCard} setData={setSummaryCard} type="indonesia" bg={`dark`} isIndonesia={true} />
                <Summary title="Situation By Provinces" subTitle="Data Covid Berdasarkan Provinsi" data={provinces} setData={setProvinces} type="regions" isTable={true} isIndonesia={true} />
            </DefaultLayout >
        </>
    );
}

export default Home;