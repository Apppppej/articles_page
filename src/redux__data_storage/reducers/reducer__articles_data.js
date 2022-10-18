export default function reducer__articles_data ( state = {} , action ) {
    switch (action.type) {

        case "ADDING_ARTICLES_DATA":
            for (let object in action) {
                state[Object.keys(state).length] = object;
            }

            return state;

        default: return state;
        
    }
};