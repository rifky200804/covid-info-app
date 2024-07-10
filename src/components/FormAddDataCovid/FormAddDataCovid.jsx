import { useState } from "react";
import { nanoid } from "nanoid";
import AlertInput from '../AlertInput/AlertInput'
import Image from '../../assets/conceptual_idea.svg'
import InputText from "./InputText/InputText";
import SelectOption from "./SelectOption/SelectOption";
import FormAddDataCovidStyled from './FormAddDataCovid.styled';

function FormAddDataCovid({ dataTable, setDataTable, summary, setSummary }) {
  let filterProvinsi = [];
  dataTable.forEach((item) => {
    let obj = {
      label: item.kota,
      value: item.kota
    };
    filterProvinsi = [...filterProvinsi, obj];
  });

  let filterStatus = summary.map((item) => ({
    label: item.status,
    value: item.status
  }));

  filterStatus.push({
    label: 'Dirawat',
    value: 'Dirawat'
  });

  const [provinsi, setProvinsi] = useState('');
  const [isProvinsiError, setIsProvinsiError] = useState('');

  function handleProvinsi(e) {
    setProvinsi(e.target.value);
  }

  const [status, setStatus] = useState('');
  const [isStatusError, setIsStatusError] = useState('');

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  const [jumlah, setJumlah] = useState('');
  const [isJumlahError, setIsJumlahError] = useState('');

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let checkData = dataTable.filter(function (item) {
      return item.kota === provinsi;
    });

    let kasusPositif = 0;
    if (checkData.length > 0) {
      let data = checkData[0];
      kasusPositif = Number(data.kasus) - Number(data.sembuh) - Number(data.dirawat) - Number(data.meninggal);
    }

    if (provinsi === '') {
      setIsProvinsiError('Provinsi Wajib Di isi');
    } else if (status === '') {
      setIsProvinsiError('');
      setIsStatusError('Status Wajib Di isi');
    } else if (jumlah === '') {
      setIsProvinsiError('');
      setIsStatusError('');
      setIsJumlahError('Jumlah Wajib Di isi');
    } else {
      // update column dataTable
      let updatedDataTable = dataTable.map((item) => {
        if (provinsi === item.kota) {
          switch (status) {
            case 'Meninggal':
              item.meninggal = Number(item.meninggal) + Number(jumlah);
              break;
            case 'Sembuh':
              item.sembuh = Number(item.sembuh) + Number(jumlah);
              break;
            case 'Dirawat':
              item.kasus = Number(item.kasus) + Number(jumlah);
              item.dirawat = Number(item.dirawat) + Number(jumlah);
              break;
            default:
              item.kasus = Number(item.kasus) + Number(jumlah);
              break;
          }
        }
        return item;
      });

      setDataTable(updatedDataTable);
      setIsProvinsiError('');
      setIsStatusError('');
      setIsJumlahError('');
      setProvinsi('');
      setStatus('');
      setJumlah('');
      alert('Success Submit Data');
    }
  }

  return (
    <FormAddDataCovidStyled>
      <div className="main_content">
        <div className="container">
          <section className="form">
            <div className="form_left">
              <img src={Image} className="form_image" alt="Conceptual Idea" />
            </div>
            <div className="form_right">
              <div className="form_title_bg">
                <h1 className="form_title">Form Covid</h1>
              </div>
              <div className="form_group">
                <h2 className="form_label">Provinsi</h2>
                <SelectOption
                  id="provinsi"
                  data={filterProvinsi}
                  type="Provinsi"
                  onChange={handleProvinsi}
                  value={provinsi}
                />
                {isProvinsiError !== '' && <AlertInput>*{isProvinsiError}</AlertInput>}
              </div>
              <div className="form_group">
                <h2 className="form_label">Status</h2>
                <SelectOption
                  id="status"
                  data={filterStatus}
                  type="Status"
                  onChange={handleStatus}
                  value={status}
                />
                {isStatusError !== '' && <AlertInput>*{isStatusError}</AlertInput>}
              </div>
              <div className="form_group">
                <h2 className="form_label">Jumlah</h2>
                <InputText
                  id="jumlah"
                  type="number"
                  onChange={handleJumlah}
                  value={jumlah}
                />
                {isJumlahError !== '' && <AlertInput>*{isJumlahError}</AlertInput>}
              </div>
              <div className="form_group">
                <button className="btn_primary" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </FormAddDataCovidStyled>
  );
}

export default FormAddDataCovid;
