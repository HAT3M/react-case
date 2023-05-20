import React from 'react'
import { CiViewTable } from "react-icons/ci";
import {BiSave} from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { updateChange, updateAllPositions } from '../stores/positions';

export default function Header() {
  const dispatch = useDispatch();
  const {isChange, verticalPosition, bottomHorizontalPosition, topHorizontalPosition} = useSelector(state => state.positions)
  
  const handleSavePositions = () => {
    const positions = {
      verticalPosition,
      bottomHorizontalPosition,
      topHorizontalPosition
    } 
    localStorage.setItem('positions', JSON.stringify(positions));
    dispatch(updateChange(false));
    dispatch(updateAllPositions(positions))
  }
  
  return (
    <header className='header'>
      <div>
        <a  className='header__logo' href="/">EPİAŞ</a>
      </div>
      <div className={`header__workarea ${isChange ? '-save' : ''}`} onClick={()=> isChange ? handleSavePositions() : undefined}>
        <div className='header__workarea-icon'>
          {isChange ? <BiSave /> : <CiViewTable /> }
        </div>
        <div className='header__workarea-text'>Çalışma Alanı 1</div>
      </div>
      <div className='header__auth'>
        <span className='circle'>A</span>
        <span>Merhaba, <b>Ahmet</b></span>
      </div>
    </header>
  )
}
