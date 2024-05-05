import styles from './DataTable.module.css'
function Thead(){
    return(
                    <tr>
                        <th className={styles.table_header}>No</th>
                        <th className={styles.table_header}>Provinsi</th>
                        <th className={styles.table_header}>Positif</th>
                        <th className={styles.table_header}>Sembuh</th>
                        <th className={styles.table_header}>Dirawat</th>
                        <th className={styles.table_header}>Meninggal</th>
                    </tr>
    )
}

function Tbody(props){
    const {data,number} = props
    return(
                    <tr>
                        <td className={styles.table_content}>{number}</td>
                        <td className={styles.table_content}>{data.kota}</td>
                        <td className={styles.table_content}>{data.kasus}</td>
                        <td className={styles.table_content}>{data.sembuh}</td>
                        <td className={styles.table_content}>{data.dirawat}</td>
                        <td className={styles.table_content}>{data.meninggal}</td>
                    </tr>
    )
}

function DataTable(props) {

    const {data} = props

    return(
        <>
            <div className={styles.main_content}>
                <table className={styles.datatable}>
                    <thead>
                        <Thead />
                    </thead>

                    <tbody>
                        {data.map((item,index)=>{
                            const number = index + 1;
                            return (
                                <Tbody key={index} number={number}  data={item} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataTable