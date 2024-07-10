import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import data from '../utils/constants/provinces.js'
import indonesia from '../utils/constants/indonesia.js'
import FormAddDataCovid from "../components/FormAddDataCovid/FormAddDataCovid";
import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
function Home() {
    let [summaryCard,setSummaryCard] = useState([])
    let [summaryRegionCard,setSummaryRegionCard] = useState([])
    return (
        <>
            <DefaultLayout >
                <Hero />
                <Summary title="Global Situation" subTitle="Data Covid Berdasarkan Global" data={summaryCard} setData={setSummaryCard} type="global" bg={`dark`}/>
                <Summary title="Situation By Regions" subTitle="Bacaan Pilihan Covid" data={summaryRegionCard} setData={setSummaryRegionCard} type="regions" />
            </DefaultLayout>
        </>
    );
}

export default Home;