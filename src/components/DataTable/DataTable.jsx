import styles from './DataTable.module.css'
function Thead(){
    return(
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
    )
}

function Tbody(props){
    const {data,number} = props
    return(
                    <tr>
                        <td>{number}</td>
                        <td>{data.kota}</td>
                        <td>{data.kasus}</td>
                        <td>{data.sembuh}</td>
                        <td>{data.dirawat}</td>
                        <td>{data.meninggal}</td>
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

                    <tbody className='scrollis'>
                        {data.map((item,index)=>{
                            const number = index + 1;
                            console.log(number)
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