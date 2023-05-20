import React, { useEffect, useState } from 'react';
import Split from 'react-split'
import { useDispatch, useSelector } from 'react-redux'
import { updateTopHorizontalPosition, updateChange } from '../stores/positions';

//components
import SplitSettingsBox from '../components/SplitSettingsBox';
import Table from '../components/Table';

export default function FirstScreen() {
  const dispatch = useDispatch();
  const {topHorizontalPosition} = useSelector(state => state.positions);
  const {firstTable} = useSelector(state => state.tables);

  const handlePosition = (sizes) => {
    dispatch(updateTopHorizontalPosition({first: sizes[0], second:sizes[1]}))
    dispatch(updateChange(true))
  }

  return (
    <>
      <Split 
        className="horizantal-area"
        sizes={[
          topHorizontalPosition.first ? topHorizontalPosition.first : 70,
          topHorizontalPosition.second ? topHorizontalPosition.second: 30]}
        onDragEnd={(sizes) => handlePosition(sizes)}>
        <div className='table__wrapper'>
          <Table 
            data= {firstTable}
          />
        </div>
        <SplitSettingsBox />
      </Split>
    </>
  )
}
