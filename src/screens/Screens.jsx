import React, { useEffect } from 'react'
import Split from 'react-split'

import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import { fetchFirstTable, fetchSecondTable } from '../stores/tables'
import { useDispatch, useSelector } from 'react-redux'

import { updateChange, updateVerticalPosition } from '../stores/positions'

export default function Screens() {
  const dispatch = useDispatch();
  const {verticalPosition} = useSelector(state => state.positions)

  const handlePosition = (sizes) => {
    dispatch(updateVerticalPosition({first: sizes[0], second:sizes[1]}))
    dispatch(updateChange(true))
  }
  
  useEffect(() => {
    dispatch(fetchFirstTable())
    dispatch(fetchSecondTable())
  }, [])

  return (
    <>
      <Split 
        className="vertical-area"
        direction="vertical"
        sizes={[
          verticalPosition.first ? verticalPosition.first : 70,
          verticalPosition.second ? verticalPosition.second: 30]}
        onDragEnd={(sizes) => handlePosition(sizes)}
      >
        <FirstScreen />
        <SecondScreen />
      </Split>
      
    </>
  )
}
