import { NOTES_LIST, SELECTED_NOTE } from './../actionTypes';
import { showAlert } from '../../components/template/showAlert';
import { store } from '../store';
import {v4 as UUID} from 'uuid';

const state = store.getState()

export const add_note_action = (text, notes) => {
  return async function (dispatch) {
    let data = notes;
    data.push({id: UUID(), text, createdAt: new Date()})
    dispatch({type: NOTES_LIST, payload: data});
    showAlert({type: 'success', title: 'Note Added'})
  };
};

export const edit_note_action = (id, text, notes) => {
  return async function (dispatch) {
    let data = notes;
    let newData = data.filter(el => el.id !== id)
    newData.push({id, text, createdAt: new Date()})
    dispatch({type: NOTES_LIST, payload: newData});
    showAlert({type: 'success', title: 'Note Edited'})
  };
};


export const remove_note_action = (id, notes) => {
  return async function (dispatch) {
    let data = notes;
    let newData = data.filter(el => el.id !== id)
    await dispatch({type: NOTES_LIST, payload: newData});
    showAlert({type: 'success', title: 'Note Removed'})
  };
};
