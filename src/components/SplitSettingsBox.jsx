import React from 'react'
import { useSelector } from 'react-redux'

export default function SplitSettingsBox() {
  const {verticalPosition, topHorizontalPosition, bottomHorizontalPosition} = useSelector(state => state.positions)

  return (
    <div className='split-settings'>
      <div className='split-settings__box'>
        <div className='split-settings__title'>Ayarlar</div>
        <div className='split-settings__item'>
          <div className='split-settings__item-title'>Yatay Pencere Değerleri:</div>
          <div className='split-settings__item-content'>
            <span>{verticalPosition.first ? `%${verticalPosition.first}` : ''}</span>
            <span>{verticalPosition.second ? `%${verticalPosition.second}` : ''}</span>
          </div>
        </div>

        <div className='split-settings__item'>
          <div className='split-settings__item-title'>Üst Dikey Pencere Değerleri:</div>
          <div className='split-settings__item-content'>
            <span>{topHorizontalPosition.first ? `%${topHorizontalPosition.first}` : ''}</span>
            <span>{topHorizontalPosition.second ? `%${topHorizontalPosition.second}` : ''}</span>
          </div>
        </div>

        <div className='split-settings__item'>
          <div className='split-settings__item-title'>Alt Dikey Pencere Değerleri:</div>
          <div className='split-settings__item-content'>
            <span>{bottomHorizontalPosition.first ? `%${bottomHorizontalPosition.first}` : ''}</span>
            <span>{bottomHorizontalPosition.second ? `%${bottomHorizontalPosition.second}` : ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
