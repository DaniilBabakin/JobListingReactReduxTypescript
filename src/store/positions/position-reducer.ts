import { ADD_POSITIONS } from "./position-actions";

type PositionAction = {
  type:string,
  positions:[]
}

export const positionReducer = (state=[],action:PositionAction):any=>{
  switch(action.type){
    case ADD_POSITIONS:{
      return action.positions
    }
    default:{
      return state
    }
  }
}