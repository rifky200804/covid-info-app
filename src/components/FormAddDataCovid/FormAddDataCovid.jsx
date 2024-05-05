import { useState } from "react";
import styles from "./FormAddDataCovid.module.css"
import { nanoid } from "nanoid";
import AlertInput from '../AlertInput/AlertInput'
import Image from '../../assets/conceptual_idea.svg'
import InputText from "./InputText/InputText";
import SelectOption from "./SelectOption/SelectOption";


function FormAddDataCovid(props){
    const {dataTable,setDataTable,summary,setSummary} = props

    let filterProvinsi = [];
    dataTable.map((item)=>{
        let obj = {
            label:item.kota,
            value:item.kota
        }
        filterProvinsi = [...filterProvinsi,obj]
    })
    // console.log(filterProvinsi)
    let filterStatus = [];
    summary.map((item)=>{
        let obj = {
            label:item.status,
            value:item.status
        }
        filterStatus = [...filterStatus,obj]
    })
    let obj = {
        label:"Dirawat",
        value:"Dirawat"
    }
    filterStatus = [...filterStatus,obj]
    
    const [provinsi,setProvinsi] = useState("")
    const [isProvinsiError,setIsProvinsiError] = useState(false)
    function handleProvinsi(e){
        setProvinsi(e.target.value)
    }
    const [status,setStatus] = useState("")
    const [isStatusError,setIsStatusError] = useState(false)
    function handleStatus(e){
        setStatus(e.target.value)
    }

    const [jumlah,setJumlah] = useState("")
    const [isJumlahError,setIsJumlahError] = useState(false)
    function handleJumlah(e){
        setJumlah(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(provinsi == ""){
            setIsProvinsiError(true)
        }else if(status == ""){
            setIsProvinsiError(false)
            setIsStatusError(true)
        }else if(jumlah == ""){
            setIsProvinsiError(false)
            setIsStatusError(false)
            setIsJumlahError(true)
        }else{
            // update column dataTable
            dataTable.map((item,index)=>{
                let updatedDataTable = [...dataTable];
                if(provinsi == item.kota){
                    switch (status) {
                        case "Meninggal":
                            item.kasus = Number(item.kasus) + Number(jumlah)
                            item.meninggal = Number(item.meninggal) + Number(jumlah)
                            break;
                        case "Sembuh":
                            item.kasus = Number(item.kasus) + Number(jumlah)
                            item.sembuh = Number(item.sembuh) + Number(jumlah)
                            break;
                        case "Dirawat":
                            item.kasus = Number(item.meninggal) + Number(jumlah)
                            item.dirawat =Number(item.dirawat) + Number(jumlah)
                            break;
                        default:
                            item.kasus = Number(item.kasus) + Number(jumlah)
                            break;
                    }
                    updatedDataTable[index] = item;
                }
                setDataTable(updatedDataTable)
            })

            // update summary
            summary.map((item,index)=>{
                let updatedDataSummary = [...summary];
                switch (status) {
                    case "Meninggal":
                        item.total = Number(item.total) + Number(jumlah)
                        break;
                    case "Sembuh":
                        item.total = Number(item.total) + Number(jumlah)
                        break;
                    default:
                        item.total = Number(item.total) + Number(jumlah)
                        break;
                }
                updatedDataSummary[index] = item;

                setSummary(updatedDataSummary)
            })
            
            setIsProvinsiError(false)
            setIsStatusError(false)
            setIsJumlahError(false)
        }
    }
    return (
        <div className={styles.main_content}>
            <div className={styles.container}>
                <section className={styles.form}>
                    <div className={styles.form_left}>
                        <img 
                            src={Image}
                            className={styles.form_image}
                        />
                    </div>
                    <div className={styles.form_right}>
                        <div className={styles.form_title_bg}>
                            <h1 className={styles.form_title} >Form Covid</h1>
                        </div>
                        <div className={styles.form_group}>
                            <h2 className={styles.form_label}>Provinsi</h2>
                           
                            <SelectOption 
                                id="provinsi"
                                data={filterProvinsi}
                                type="Provinsi"
                                onChange={handleProvinsi}
                            />
                            {isProvinsiError && <AlertInput>*Provinsi Wajib Diisi</AlertInput>}
                        </div>
                        <div className={styles.form_group}>
                            <h2 className={styles.form_label}>Status</h2>
                            <SelectOption 
                                id="status"
                                data={filterStatus}
                                type="Status"
                                onChange={handleStatus}
                            />
                            {isStatusError && <AlertInput>*Status Wajib Diisi</AlertInput>}
                        </div>
                        <div className={styles.form_group}>
                            <h2 className={styles.form_label}>Jumlah</h2>
                            <InputText 
                                id="jumlah"
                                type="number"
                                onChange={handleJumlah}
                            />
                            {isJumlahError && <AlertInput>*Jumlah Wajib diisi</AlertInput>}
                        </div>
                        <div className={styles.form_group}>
                            <button
                                className={styles.btn_primary}
                                onClick={handleSubmit}
                            > Submit </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FormAddDataCovid