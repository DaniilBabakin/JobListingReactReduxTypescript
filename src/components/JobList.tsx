import React from "react"
import { selectAllPositions, selectVisiblePositions } from "../store/positions/positions-selectors"
import { JobPosition } from "./JobPosition"
import { JobPositionProps } from "../types"
import { useTypedSelector } from "../hooks/useTypedSelector"

import { addFilter } from "../store/filters/filter-actions"
import { useDispatch } from "react-redux"
import { selectFilters } from "../store/filters/filter-selector"

const JobList: React.FC = () => {
  const dispatch = useDispatch()
  const currentFilters = useTypedSelector(selectFilters)
  const positions = useTypedSelector((state:any)=> selectVisiblePositions(state,currentFilters))
  
  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className="job-list">
      {positions.map((item: JobPositionProps) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList }
