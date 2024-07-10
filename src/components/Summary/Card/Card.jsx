import CardStyled from "./Card.styled";
import NumberFormat from "../../../utils/NumberFormat";

function Data(props) {
  const { data } = props;

  return (
    <div className="card">
      <h3 className="card_title">
        {data.status === "death"
          ? "Death"
          : data.status === "recovered"
          ? "Recovered"
          : data.status === "confirmed"
          ? "Confirmed"
          : data.status}
      </h3>
      <p
        className="card_body"
        style={{
          color:
            data.status === "death"
              ? "#EF476F"
              : data.status === "recovered"
              ? "#06D6A0"
              : "#118AB2",
        }}
      >
        {NumberFormat(data.total)}
      </p>
    </div>
  );
}

function Card(props) {
  const { data } = props;

  return (
    <CardStyled>
      <div className="cards">
        {data.map((item, index) => {
          return <Data data={item} key={index} />;
        })}
      </div>
    </CardStyled>
  );
}

export default Card;
