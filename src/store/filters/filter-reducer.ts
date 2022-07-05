import { FilterActionTypes } from "./filter-actions"


export const filterReducer = (state = [] as any,action:any):any => {
  switch(action.type){
    case FilterActionTypes.ADD_FILTER:{
      if(!state.includes(action.filter)){
        return [...state,action.filter]
      }
      return state
    }
    case FilterActionTypes.REMOVE_FILTER:{
      return state.filter((item:string)=> item !== action.filter)
    }
    case FilterActionTypes.CLEAR_FILTER:{
      return []
    }
    default:{
      return state
    }
  }
}