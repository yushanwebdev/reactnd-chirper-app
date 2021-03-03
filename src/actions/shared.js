import { getInitialData } from '../utils/api';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';

export default function handleInitialData() {
    return (dispatch) => {
        getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
            })
    }
}