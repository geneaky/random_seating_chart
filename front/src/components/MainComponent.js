import React from 'react';
import { connect } from 'react-redux';
import {
  generateTable,
  changeRows,
  changeColumns,
  changeSeatPerTable,
  nameformToggle,
  initFirstStart
} from '../actions/appActions';
import RowsAndColumnsSelector from './RowsAndColumnsSelector';
import ChairTable from './ChairTable';
import Buttons from './Buttons';
import NamesForm from './NamesForm';

class MainComponent extends React.Component {
  componentDidMount() {
    this.props.initFirstStart();
  }

  render() {
    return (
      <div className="MainComponent">
        <RowsAndColumnsSelector /> <br />
        <ChairTable /> <br />
        <Buttons /> <br />
        {this.props.isNamesFormShown ? <NamesForm /> : undefined} <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.tables.columns,
  rows: state.tables.rows,
  tableData: state.tables.tableData,
  names: state.tables.names,
  isNamesFormShown: state.tables.isNamesFormShown,
  seatsPerTable: state.tables.seatsPerTable
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    changeRows,
    changeColumns,
    changeSeatPerTable,
    nameformToggle,
    initFirstStart
  }
)(MainComponent);
