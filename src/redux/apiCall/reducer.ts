import { NOTES_LIST, SELECTED_NOTE } from './../actionTypes';

const tempState = {
    notes: [],
    selectedNote: null,
}

const tempStateReducer = (state=tempState, action)=>{
    switch (action.type) {
        case NOTES_LIST : return {...state, notes:action.payload}; break;
        case SELECTED_NOTE : return {...state, selectedNote:action.payload}; break;

        default: return state; break;
    }
}

export default tempStateReducer