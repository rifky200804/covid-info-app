import { useState } from "react";
import styles from "./FormAddDataCovid.module.css"
import { nanoid } from "nanoid";
import AlertInput from '../AlertInput/AlertInput'
import Image from '../../assets/conceptual_idea.svg'
function FormAddDataCovid(props){
    const {data,setData} = props
    const [kota,setKota] = useState("")
    const [isKotaError,setIsKotaError] = useState(false)
    function handleKota(e){
        // console.log(e.target.value)
        setKota(e.target.value)
    }
    const [status,setStatus] = useState("")
    const [isStatusError,setIsStatusError] = useState(false)
    function handleStatus(e){
        setStatus(e.target.value)
    }

    const [jumlah,setJumlah] = useState("")
    const [isJumlahError,setIsJumlahError] = useState(false)
    function handleJumlah(e){
        // console.log(e.target.value)
        setJumlah(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(kota == ""){
            setIsKotaError(true)
        }else if(status == ""){
            setIsKotaError(false)
            setIsStatusError(true)
        }else if(jumlah == ""){
            setIsKotaError(false)
            setIsStatusError(false)
            setIsJumlahError(true)
        }else{
            const item = {
                 "kota" : kota
             }
             setData([...data,item])
             
             setIsKotaError(false)
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
                            <h2 className={styles.form_label}>Kota</h2>
                            <input
                                id="kota"
                                type="text"
                                className={styles.input_text}
                                onChange={handleKota}
                            />
                            {isKotaError && <AlertInput>*Kota Wajib Diisi</AlertInput>}
                        </div>
                        <div className={styles.form_group}>
                            <h2 className={styles.form_label}>Status</h2>
                            <input
                                id="kota"
                                type="text"
                                className={styles.input_text}
                                onChange={handleStatus}
                            />
                            {isStatusError && <AlertInput>*Status Wajib Diisi</AlertInput>}
                        </div>
                        <div className={styles.form_group}>
                            <h2 className={styles.form_label}>Jumlah</h2>
                            <input
                                id="Jumlah"
                                type="text"
                                className={styles.input_text}
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