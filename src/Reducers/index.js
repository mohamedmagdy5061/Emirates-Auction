import {createStore} from 'redux'   
import { langStoreState } from './LangStore'


export  const store = createStore(
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    langStoreState,
)

console.log(store.getState())   