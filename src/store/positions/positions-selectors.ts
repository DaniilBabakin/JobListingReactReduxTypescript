import { RootState } from "../root-reducer"

export const selectAllPositions = (state:RootState) => state.positions

type posProps = {
  role:string,
  level:string,
  languages:string[],
  tools:string[]
}

export const selectVisiblePositions = (state:RootState,filters:any[] = []) => {
  if (filters.length === 0) return state.positions

  return state.positions.filter((pos:posProps)=>{
    const posFilters = ([] as any).concat(pos.role,pos.level,...pos.languages,...pos.tools)

    return filters.every(filter=> posFilters.includes(filter))
  })

}