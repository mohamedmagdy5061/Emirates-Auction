import {createStore} from 'redux'   
import { langStoreState } from './LangStore'


export  const store = createStore(
    langStoreState,
)

console.log(store.getState())   