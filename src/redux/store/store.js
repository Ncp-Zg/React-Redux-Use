import {createStore} from "redux"
import { counterReducer } from "../reducers/reducer"

export const store=createStore(counterReducer)