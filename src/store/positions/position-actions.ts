import { JobPositionDataProps } from "../../types"

export const ADD_POSITIONS = 'ADD-POSITIONS'
export const addPositions = (positions:JobPositionDataProps[]) => ({
  type:ADD_POSITIONS,
  positions,
})