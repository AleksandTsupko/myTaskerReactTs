import {ERootActionTypes } from '../store/actionTypes/actionTypes'

export interface IRootState {
    user: object;
    users: any[];
    loading: boolean;
    error: null | string;
};

export type IAction = IFetchUser;

export interface IFetchUser {
    type: ERootActionTypes.FETCH_USER;
    payload: {};
};
