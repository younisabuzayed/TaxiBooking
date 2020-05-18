/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
const INITIAL_STATE = {user: null ,isLoading: false, error: ''};
export default (state = INITIAL_STATE, action) =>
{
    switch (action.type)
    {
        case 'login-attempt':
         return {
             ...state,
             isLoading: true,
        };
        default:
        return state;
    }
};
