import styles from './SummaryCard.module.css'

function Card(props){
    const {data,number} = props
    return(
        <>
            <div className={styles.card}>

            </div>
        </>
    )
}

function SummaryCard(props) {

    const {data} = props

    return(
        <>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default SummaryCard