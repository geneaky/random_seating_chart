import React from 'react';
import { connect } from 'react-redux';

function ChairTable(props) {
  return (
    <div className="Chair-table">
      <h1>칠판</h1>
      <table>
        <tbody>
          {props.tableData.map(el => (
            <tr key={el.id}>
              {el.columns.map(el => (
                <td key={Math.random() * 55}>
                  <ul>
                    <li>{el[0]}</li>
                    {el[1] !== undefined ? <li>{el[1]}</li> : undefined}
                  </ul>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
}

const mapStateToProps = state => ({
  tableData: state.tables.tableData
});

export default connect(
  mapStateToProps,
  null
)(ChairTable);
