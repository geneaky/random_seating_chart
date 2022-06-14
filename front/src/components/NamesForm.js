import React from 'react';
import { connect } from 'react-redux';
import { generateTable, nameformToggle } from '../actions/appActions';
import axios from 'axios';

class NamesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      names: this.props.names.join(', ')
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendUserNames = this.sendUserNames.bind(this);
  }

  handleSubmit(event) {
    this.props.generateTable(
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

  sendUserNames = async (e) => {
    this.handleSubmit(e);

    await axios.post('/users',{ data: this.state.names}).then(async () => {
      console.log('hi');
      await axios.get('/users').then((res) => {

        let names = [];

        for(let i = 0; i < res.data.data.length; i++) {
          names[i] = res.data.data[i].name;
        }
        this.setState({ names :names });

        this.props.generateTable(
            'rows',
            this.props.rows,
            this.state.names.split(', ')
        );

        this.props.nameformToggle();
      })
    })
  }


  render() {
    return (
      <div className="names-form-container">
        <h2>이름</h2>
        <form onSubmit={this.sendUserNames}>
          <input
            id="studentNames"
            type="text"
            value={this.state.names}
            onChange={this.handleChange}
          />
          <input type="submit" value="입력" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rows: state.tables.rows,
  names: state.tables.names
});

export default connect(
  mapStateToProps,
  {
    generateTable,
    nameformToggle
  }
)(NamesForm);
