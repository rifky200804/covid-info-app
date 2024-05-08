import styles from './Card.module.css'

function NumberFormat(props) {
    const { number } = props;
    const formattedNumber = parseFloat(number).toLocaleString('id-ID', { minimumFractionDigits: 0 });
  
    return (
      <span>{formattedNumber}</span>
    );
}

function Data(props){
    const {data} = props
    return(
        <>
            <div className={styles.card}>
                <p className={styles.card_title} >
                    {data.status == "Meninggal" ? "Death" : data.status == "Sembuh" ? "Recovered" : data.status == "Positif" ? "Confirmed" : data.status}
                </p>
                <p
                    className={styles.card_body}
                    style={
                        {color : data.status =='Meninggal' ?  '#EF476F' : data.status == "Positif" ? '#06D6A0' : '#118AB2'
                    }}
                    >
                        <NumberFormat number={data.total} />
                </p>
            </div>
        </>
    )
}

function Card(props) {

    const {data} = props

    return(
        <>
            <div className={styles.cards}>
                {
                    data.map((item,index)=>{
                        return(
                            <Data data ={item}  key={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card