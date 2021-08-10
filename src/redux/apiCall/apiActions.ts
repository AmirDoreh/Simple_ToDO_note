import { NOTES_LIST, SELECTED_NOTE } from './../actionTypes';
import { showAlert } from '../../components/template/showAlert';
import { store } from '../store';
import {v4 as UUID} from 'uuid';

const state = store.getState()

export const add_note_action = (text) => {
  return async function (dispatch) {
    let data = state.tempStateReducer.notes;
    data.push({id: UUID(), text})
    dispatch({type: NOTES_LIST, payload: data});
    showAlert({type: 'success', title: 'Note Added'})
  };
};

export const remove_note_action = (id) => {
  return async function (dispatch) {
    let data = state.tempStateReducer.notes;
    let newData = data.filter(el => el.id !== id)
    dispatch({type: NOTES_LIST, payload: newData});
    showAlert({type: 'success', title: 'Note Added'})
  };
};
