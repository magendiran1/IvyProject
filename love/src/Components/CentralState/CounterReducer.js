

const InitialState = { count :0}

const reducer = (state = InitialState, action) => {

    switch (action.type) {
        case "IncrementCounter":
            return {
                ...state,
                count:state.count+1
            }
        default:
            return state;
    }
}

export default reducer;