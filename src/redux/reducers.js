import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { currentSearch, fetchSearchError, fetchSearchRequest, fetchSearchSuccess } from "./actions";

let defaultRender = true;

const current = createReducer('Kyiv', {
    [currentSearch]:  (state, action) => {
        return action.payload ? action.payload : state;
    }
})

const search = createReducer('', {
    [fetchSearchSuccess]: (state, action) => {
        if (defaultRender) {
            defaultRender = false;
            return state
        }
        const dateNow = new Date().getTime();
        return [{ ...action.payload, date: dateNow }, ...state].sort((a,b) => b.date - a.date)
    }
})

const searchReducer = createReducer(null, {
    [fetchSearchSuccess]: (_, action) => action.payload
});

const loading = createReducer(false, {
  [fetchSearchRequest]: () => true,
  [fetchSearchSuccess]: () => false,
  [fetchSearchError]: () => false,
});

const error = createReducer('', {
    [fetchSearchError]: (_, action) => action.payload,
    [fetchSearchRequest]: () => '',
});

const weatherReducer = combineReducers({
    current,
    search,
    searchReducer,
    loading,
    error,
});

export default weatherReducer;

