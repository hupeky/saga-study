import {Types} from '../actions/users'

const INITIAL_STATE = {
    items: []
}

export default function users(state = INITIAL_STATE, actions) {
    switch(actions.type){
        case Types.GET_USERS_SUCCESS: {
            return {
                items: actions.payload.items
            }
        }
        default: {
            return state
        }
    }
}