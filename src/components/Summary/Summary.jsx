import DataTable from "./DataTable/DataTable";
import SummaryCard from "./Card/Card";
import styles from "./Summary.module.css";

let HeaderTable = [
  "No",
  "Provinsi",
  "Positif",
  "Sembuh",
  "Dirawat",
  "Meninggal"
]

function Summary({ title, subTitle, type, data}) {
  return (
    <div className={styles.container} 
    style={{
      backgroundColor : type === 'indonesia' ?  '#F8F9FA' : '#FFF'
    }}>
      <section className={styles.summary}>
        <div className={styles.summary_head}>
          <h1 className={styles.summary_title}> {title} </h1>
          <h4 className={styles.summary_sub_title}> {subTitle} </h4>
        </div>
        <div className={styles.summary_content}>
          {type === "provinsi" ? (
            <DataTable data={data} header={HeaderTable} />
          ) : (
            <SummaryCard data={data} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Summary;
