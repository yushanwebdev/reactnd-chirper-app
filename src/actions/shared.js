import { getInitialData } from '../utils/api';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';
import { setAuthedUser } from './authUser';

const AUTHED_ID = 'tylermcginnis';

export default function handleInitialData() {
    return (dispatch) => {
        getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}