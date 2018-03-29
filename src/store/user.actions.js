import { CreateAction } from '../utils/action-creator';
import { BASE_API_PATH } from '../api/api.paths';
import { get } from '../api/api.service';

const USER_ACTION_PREFIX = '[USER_ACTION]';

export const LOAD_USERS_STARTED = '${USER_ACTION_PREFIX} Load users started';
export const LOAD_USERS_COMPLETED = '${USER_ACTION_PREFIX} Load users completed';
export const LOAD_USERS_FAILED = '${USER_ACTION_PREFIX} Load users failed';

export const LoadUsersStarted = CreateAction(LOAD_USERS_STARTED);
export const LoadUsersCompleted = CreateAction(LOAD_USERS_COMPLETED, 'payload');
export const LoadUsersFailed = CreateAction(LOAD_USERS_FAILED);

export function LoadUsers() {
    return function(dispatch) {
        dispatch(LoadUsersStarted());

        return get(BASE_API_PATH)
            .then(res =>  {
                    dispatch(LoadUsersCompleted(res))
                },
                error => dispatch(LoadUsersFailed()))
    }
}