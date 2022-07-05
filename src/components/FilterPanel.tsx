import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';

import { selectFilters } from '../store/filters/filter-selector';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { clearFilter, removeFilter } from '../store/filters/filter-actions';

export const FilterPanel:React.FC = () => {
  const dispatch = useDispatch()
  const currentFilters = useTypedSelector(selectFilters)
  console.log(currentFilters)
  if(currentFilters.length === 0 ){
    return null
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter:string)=> {
            return <Badge variant="clearable" key={filter} onClear={()=>dispatch(removeFilter(filter))}>{filter}</Badge>
          })}
        </Stack>

        <button className='link' onClick={()=> dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

