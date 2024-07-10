import DataTable from "./DataTable/DataTable";
import SummaryCard from "./Card/Card";
import RegionSummaryCard from "./RegionCard/RegionCard";
import SummaryStyled from "./Summary.styled";
import { useEffect } from "react";
import axios from "axios";
import ENDPOINT from "../../utils/constants/endpoints";

let HeaderTable = [
  "No",
  "Provinsi",
  "Positif",
  "Sembuh",
  "Dirawat",
  "Meninggal",
];

function Summary({ title, subTitle, type, data, setData, bg, isApi = true, isTable, isIndonesia = false }) {
  useEffect(() => {                                                                               
    const dataSummary = async () => {
      try {
        if (isIndonesia) {
          const response = await axios.get(ENDPOINT.INDONESIA);
          if (type === "regions") {
            setData(response.data.regions);
          } else {
            setData(response.data.indonesia);
          }
        } else {
          const response = await axios.get(ENDPOINT.GLOBAL);
          if (type === "regions") {
            setData(response.data.regions);
          } else {
            setData(response.data.global);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (isApi) {
      dataSummary();
    }
  }, []);

  return (
    <SummaryStyled>
      <div
        className="container"
        style={{
          backgroundColor: bg === "dark" ? "#F8F9FA" : "#FFF",
        }}
      >
        <section className="summary">
          <div className="summary_head">
            <h1 className="summary_title"> {title} </h1>
            <h4 className="summary_sub_title"> {subTitle} </h4>
          </div>
          <div className="summary_content">
            {type === "provinsi" || isTable ? (
              <DataTable data={data} header={HeaderTable} />
            ) : type === "regions" ? (
              <RegionSummaryCard data={data} />
            ) : (
              <SummaryCard data={data} />
            )}
          </div>
        </section>
      </div>
    </SummaryStyled>
  );
}

export default Summary;
