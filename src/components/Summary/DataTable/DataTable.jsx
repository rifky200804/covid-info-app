import DataTableStyled from './DataTable.styled';
import NumberFormat from '../../../utils/NumberFormat';

function Thead({ headers }) {
    return (
        <tr>
            {headers.map((item, index) => (
                <th className="table_header" key={index}>{item}</th>
            ))}
        </tr>
    );
}

function Tbody({ data, number }) {
    return (
        <tr>
            <td className="table_content">{number}</td>
            <td className="table_content">{data.kota || data.name}</td>
            <td className="table_content">{NumberFormat(data.kasus) || NumberFormat(data.numbers?.confirmed)}</td>
            <td className="table_content">{NumberFormat(data.sembuh) || NumberFormat(data.numbers?.recovered)}</td>
            <td className="table_content">{NumberFormat(data.dirawat) || NumberFormat(data.numbers?.treatment)}</td>
            <td className="table_content">{NumberFormat(data.meninggal) || NumberFormat(data.numbers?.death)}</td>
        </tr>
    );
}

function DataTable(props) {
    const { data, header } = props;

    return (
        <DataTableStyled>
            <div className="main_content">
                <div className="main_table">
                    <table className="datatable">
                        <thead>
                            <Thead headers={header} />
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                const number = index + 1;
                                return <Tbody key={index} number={number} data={item} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </DataTableStyled>
    );
}

export default DataTable;
