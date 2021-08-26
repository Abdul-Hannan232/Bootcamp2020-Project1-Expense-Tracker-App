const AppReducer = (state, action) => {
    switch(action.type){
        case "ADD": {
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        }
        case "DEL": {
            return {
                ...state,
                transaction: state.transaction.filter((transaction) => {
                    return action.payload !== transaction.id;
                })
            }
        }
        default:
            return state;
    }
}
export default AppReducer;