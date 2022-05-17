import {
  GENERATE_TABLE,
  CHANGE_ROWS,
  CHANGE_COLUMNS,
  NAMEFORM_TOGGLE
} from './types';

export const generateTable = (
  rows_or_columns,
  value,
  studentNames
) => (dispatch, getState) => {
  let nameIdxAssigned = [];
  let n_namesAssigned = 0;
  let arr = [];

  if (rows_or_columns === 'rows') {
    for (let i = 0; i < value; i++) {
      arr[i] = { id: i, columns: [] };

      for (let j = 0; j < getState().tables.columns; j++) {
        arr[i].columns[j] = [];
        let idx;

        do {
          idx = Math.floor(Math.random() * studentNames.length);
        } while (
            n_namesAssigned < studentNames.length &&
            nameIdxAssigned[idx] === 'true');

        if (n_namesAssigned < studentNames.length) {
          arr[i].columns[j][0] = studentNames[idx];
          nameIdxAssigned[idx] = 'true';
          n_namesAssigned++;
        } else arr[i].columns[j][0] = undefined;
      }
    }
  } else if (rows_or_columns === 'columns') {
    for (let i = 0; i < getState().tables.rows; i++) {
      arr[i] = { id: i, columns: [] };

      for (let j = 0; j < value; j++) {
        arr[i].columns[j] = [];

        let idx;

        do {
            idx = Math.floor(Math.random() * studentNames.length);
        } while (
            n_namesAssigned < studentNames.length &&
            nameIdxAssigned[idx] === 'true');

        if (n_namesAssigned < studentNames.length) {
          arr[i].columns[j][0] = studentNames[idx];
          nameIdxAssigned[idx] = 'true';
          n_namesAssigned++;
        } else arr[i].columns[j][0] = undefined;
      }
    }
  }

  dispatch({
    type: GENERATE_TABLE,
    payload: { arr, studentNames }
  });
};

export const initFirstStart = () => (dispatch, getState) => {
  const studentNamesFromLocalStorage = localStorage.getItem('studentNames');
  const { rows, names } = getState().tables;
  if (studentNamesFromLocalStorage) {
    dispatch(
      generateTable(
        'rows',
        rows,
        studentNamesFromLocalStorage.split(',')
      )
    );
  } else {
    dispatch(generateTable('rows', rows, names));
  }
};

export const changeRows = rows => dispatch => {
  dispatch({
    type: CHANGE_ROWS,
    payload: rows
  });
};

export const changeColumns = columns => dispatch => {
  dispatch({
    type: CHANGE_COLUMNS,
    payload: columns
  });
};

export const nameformToggle = () => dispatch => {
  dispatch({
    type: NAMEFORM_TOGGLE
  });
};
