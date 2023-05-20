import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Split from 'react-split'
import { updateBottomHorizontalPosition, updateChange } from '../stores/positions';

import Table from '../components/Table';

export default function SecondScreen() {
  const dispatch = useDispatch();
  const {bottomHorizontalPosition} = useSelector(state => state.positions)
  const {secondTable} = useSelector(state => state.tables);

  const handlePosition = (sizes) => {
    dispatch(updateBottomHorizontalPosition({first: sizes[0], second:sizes[1]}))
    dispatch(updateChange(true))
  }
  return (
    <>
      <Split 
        className="horizantal-area"
        sizes={[
          bottomHorizontalPosition.first ? bottomHorizontalPosition.first : 70,
          bottomHorizontalPosition.second ? bottomHorizontalPosition.second: 30]}
        onDragEnd={(sizes) => handlePosition(sizes)}>
        <div className='table__wrapper'>
          <Table 
            data= {secondTable}
          />
        </div>
        <div>** Lorem Ipsum **</div>
      </Split>
    </>
  )
}
