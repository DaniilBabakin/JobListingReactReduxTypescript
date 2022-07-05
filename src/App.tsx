import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {FilterPanel} from './components/FilterPanel';
import { JobList } from './components/JobList';
import { TheHeader } from './components/TheHeader';
import { addPositions } from './store/positions/position-actions';
import data from './mock/data.json'

export const App:React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPositions(data))
  }, [])
  
  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList/>
     </div>
    </>
  );
}

