import React from 'react';
import RegionCardStyled from './RegionCard.styled';
import iconConfirmed from '../../../assets/icon/confirmed.svg';
import iconDeath from '../../../assets/icon/death.svg';
import iconRecovered from '../../../assets/icon/recovered.svg';
import NumberFormat from '../../../utils/NumberFormat';

function Data({ data }) {
  return (
    <RegionCardStyled>
      <div className="card">
        <h3 className="card_title">{data.name || data.status}</h3>
        <div className="card_body">
          <div className="status_item">
            <div className="status_text">
              <div className="status_label">Confirmed</div>
              <div className="status_value confirmed">
                {NumberFormat(data.numbers.confirmed)}
              </div>
            </div>
            <div className="icon">
              <img src={iconConfirmed} alt="Confirmed" />
            </div>
          </div>
        </div>
        <div className="card_body">
          <div className="status_item">
            <div className="status_text">
              <div className="status_label">Recovered</div>
              <div className="status_value recovered">
                {NumberFormat(data.numbers.recovered)}
              </div>
            </div>
            <div className="icon">
              <img src={iconRecovered} alt="Recovered" />
            </div>
          </div>
        </div>
        <div className="card_body">
          <div className="status_item">
            <div className="status_text">
              <div className="status_label">Death</div>
              <div className="status_value death">
                {NumberFormat(data.numbers.death)}
              </div>
            </div>
            <div className="icon">
              <img src={iconDeath} alt="Death" />
            </div>
          </div>
        </div>
      </div>
    </RegionCardStyled>
  );
}

function RegionCard({ data }) {
  return (
    <RegionCardStyled>
      <div className="cards">
        {data.map((item, index) => (
          <Data data={item} key={index} />
        ))}
      </div>
    </RegionCardStyled>
  );
}

export default RegionCard;
