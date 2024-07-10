
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import data from '../utils/constants/provinces.js'
import dataSummary from '../utils/constants/indonesia.js'
import FormAddDataCovid from "../components/FormAddDataCovid/FormAddDataCovid";
import { useContext, useEffect, useState } from "react";
import ProvinceContext from "../context/ProvinceContext.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
function Home() {
    const {provinces,setProvinces} = useContext(ProvinceContext);
    const [summary,setSummary] = useState(dataSummary.indonesia)
    useEffect(()=>{
        setProvinces(data.provinces);
    },[])
    return (
        <>
            <DefaultLayout >
                <Hero />
                <Summary title="Provinsi" subTitle="Data Covid Berdasarkan Provinsi" data={provinces} setData={setProvinces} type="regions" isApi={false} isTable={true} isIndonesia={true} />
                <FormAddDataCovid dataTable={provinces} setDataTable={setProvinces} summary={summary}/>
            </DefaultLayout >
        </>
    );
}

export default Home;