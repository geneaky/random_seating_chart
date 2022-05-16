import React from 'react';
import { connect } from 'react-redux';
import { generateTable, nameformToggle } from '../actions/appActions';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { name } = event.target;
    switch (name) {
      case 'gen':
        this.props.generateTable(
          this.props.seatsPerTable,
          'rows',
          this.props.rows,
          this.props.names
        );
        break;
      case 'updateName':
        this.props.nameformToggle();
        break;
      case 'reset':
        localStorage.clear();
        window.location.reload();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="button-container">
        <button name="gen" onClick={this.handleClick}>
          만들기
        </button>
        <button name="updateName" onClick={this.handleClick}>
          초딩 이름
        </button>
        <button name="reset" onClick={this.handleClick}>
          초기화
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rows: state.tables.rows,
  names: state.tables.names,
  seatsPerTable: state.tables.seatsPerTable
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    nameformToggle
  }
)(Buttons);
