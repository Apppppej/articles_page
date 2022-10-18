export default function reducer__site_data ( state = {} , action ) {
    switch (action.type) {

        case "ADDING_SITE_DATA":
            state = action.array[0];

            return state;

        default: return state;
        
    }
};