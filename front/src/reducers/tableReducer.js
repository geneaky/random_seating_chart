import {
  GENERATE_TABLE,
  CHANGE_ROWS,
  CHANGE_COLUMNS,
  NAMEFORM_TOGGLE
} from '../actions/types';

const initialState = {
  columns: !localStorage.getItem('columns')
    ? 4
    : localStorage.getItem('columns'),
  rows: !localStorage.getItem('rows') ? 5 : localStorage.getItem('rows'),
  tableData: [],
  names: ['주창륜', '사용자1', '사용자2', '사용자3', '사용자4'],
  isNamesFormShown: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_TABLE:
      localStorage.setItem('studentNames', action.payload.studentNames);
      return {
        ...state,
        tableData: action.payload.arr,
        names: action.payload.studentNames
      };
    case CHANGE_ROWS:
      localStorage.setItem('rows', action.payload);
      return {
        ...state,
        rows: action.payload
      };
    case CHANGE_COLUMNS:
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
