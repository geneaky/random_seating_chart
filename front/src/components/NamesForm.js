import React from 'react';
import { connect } from 'react-redux';
import { generateTable, nameformToggle } from '../actions/appActions';

class NamesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      names: this.props.names.join(', ')
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.generateTable(
      this.props.seatsPerTable,
      'rows',
      this.props.rows,
      this.state.names.split(', ')
    );
    this.props.nameformToggle();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ names: event.target.value });
  }

  render() {
    return (
      <div className="names-form-container">
        <h2>이름</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="studentNames"
            type="text"
            value={this.state.names}
            onChange={this.handleChange}
            placeholder="Input student names here (e.g. Jojo, Lili, Bibi)"
          />
          <input type="submit" value="입력" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rows: state.tables.rows,
  seatsPerTable: state.tables.seatsPerTable,
  names: state.tables.names
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    nameformToggle
  }
)(NamesForm);
