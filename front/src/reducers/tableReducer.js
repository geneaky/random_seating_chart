import {
  GENERATE_TABLE,
  CHANGE_ROWS,
  CHANGE_COLUMNS,
  CHANGE_SEATPERTABLE,
  NAMEFORM_TOGGLE
} from '../actions/types';

const initialState = {
  // try to get columns, rows, and seats per table value from localstorage for returning users. If not found then use default values
  columns: !localStorage.getItem('columns')
    ? 4
    : localStorage.getItem('columns'),
  rows: !localStorage.getItem('rows') ? 5 : localStorage.getItem('rows'),
  tableData: [],
  names: ['Putu', 'Budi', 'Dora', 'Ahmad', 'Santoso'],
  isNamesFormShown: false,
  seatsPerTable: !localStorage.getItem('seatsPerTable')
    ? 2
    : localStorage.getItem('seatsPerTable')
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_TABLE:
      // save student names to localstorage everytime table is generated
      localStorage.setItem('studentNames', action.payload.studentNames);
      return {
        ...state,
        tableData: action.payload.arr,
        names: action.payload.studentNames
      };
    case CHANGE_SEATPERTABLE:
      // save seats per table value to localstorage for returning users
      localStorage.setItem('seatsPerTable', action.payload);
      return {
        ...state,
        seatsPerTable: action.payload
      };
    case CHANGE_ROWS:
      // save rows value to localstorage for returning users
      localStorage.setItem('rows', action.payload);
      return {
        ...state,
        rows: action.payload
      };
    case CHANGE_COLUMNS:
      // save columns value to localstorage for returning users
      localStorage.setItem('columns', action.payload);
      return {
        ...state,
        columns: action.payload
      };
    case NAMEFORM_TOGGLE:
      return {
        ...state,
        isNamesFormShown: !state.isNamesFormShown
      };
    default:
      return state;
  }
}
