const initialState = {
    language:"en"
}

export const langStoreState = (state = initialState , action) => {
    switch (action.type){
        case "en" : 
        return {
            ...state,
            language : 'en',
        };
        case "ar" :
        return {
            ...state,
            language: 'ar'

        }
        default :
        return state
    }
}