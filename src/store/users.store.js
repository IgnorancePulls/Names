import {
    LOAD_USERS_STARTED,
    LOAD_USERS_COMPLETED,
    LOAD_USERS_FAILED
} from './user.actions';

const initialState = {
    users: [],
    isLoading: false,
    isError: false
};

export const UsersStore = (state = initialState, action) => {
    switch (action.type) {
        case(LOAD_USERS_STARTED):
            return {
                ...state,
                isLoading: true,
                isError: false
            };

        case(LOAD_USERS_COMPLETED):
            return {
                users: action.payload,
                isLoading: false,
                isError: false
            };

        case(LOAD_USERS_FAILED):
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
};