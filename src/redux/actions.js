import { createAction} from "@reduxjs/toolkit";

export const currentSearch = createAction('form/current');

export const fetchSearchRequest = createAction('app/fetchSearchRequest');
export const fetchSearchSuccess = createAction('app/fetchSearchSuccess');
export const fetchSearchError = createAction('app/fetchSearchError');

