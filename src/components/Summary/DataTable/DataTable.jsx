import styles from './DataTable.module.css'
function Thead(props){
    const {headers} = props
    return(
                    <tr>
                        {
                            headers.map((item,index)=>{
                                return(
                                    <th className={styles.table_header} key={index}>{item}</th>
                                )
                            })
                        }
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

    const {data,header} = props

    return(
        <>
            <div className={styles.main_content}>
                <div className={styles.main_table}>
                    <table className={styles.datatable}>
                        <thead>
                            <Thead headers={header} />
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
            </div>
        </>
    )
}

export default DataTable