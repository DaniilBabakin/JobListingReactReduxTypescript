
export enum FilterActionTypes {
  ADD_FILTER = "ADD_FILTER",
  REMOVE_FILTER = "REMOVE_FILTER",
  CLEAR_FILTER = "CLEAR_FILTER"
}
export const addFilter = (filter:string) => ({
  type:FilterActionTypes.ADD_FILTER,
  filter
})

export const removeFilter = (filter:string)=> ({
  type:FilterActionTypes.REMOVE_FILTER,
  filter
})

export const clearFilter = {
  type:FilterActionTypes.CLEAR_FILTER
}