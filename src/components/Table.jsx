import React, { useEffect, useRef, useState } from 'react'
import {RiUpload2Fill, RiSettings3Fill} from 'react-icons/ri'
import {BiPlus} from 'react-icons/bi'

import Form from './Form';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../stores/tables';

export default function Table({data}) {
  const {
    head,
    body,
    isActions,
    isShowHead,
    isSelectFilter,
    isNewData
  } = data;

  const dispatch = useDispatch();
  const [selectedContract, setSelectedContract] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [openFilter, setOpenFilter] = useState(false)

  const refFilter = useRef();

  const filteredData = selectedContract
    ? body.filter((item) => item.contract === selectedContract)
    : body;

  const selectOptions = [... new Set(body.map(item => item.contract))];

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true);

    return () => {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  }, [])


  const handleContractChange = (event) => {
    setSelectedContract(event.target.value);
  };

  const handleColumnSelection = (columnKey) => {
    const updateHead = head.map((column) => {
      if(column.name === columnKey) {
        return {...column, selected: !column.selected}
      }
      return column;
    });

    dispatch(updateFilter(updateHead));
  }

  const handleClickOutSide = (e) => {
    if(!refFilter.current?.contains(e.target)) {
      setOpenFilter(false);
    }
  }

  return (
    <div>
      {isSelectFilter || isActions ? (
        <div className='table__header'>
          {isSelectFilter && 
            <select 
              name="select-filter"
              onChange={ev => handleContractChange(ev)}
            >
              <option value="">Kontrat Seçiniz</option>
              {selectOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
            </select>
          }

          {isActions && 
            <div className='table__actions'>
              <div className='table__actions-item'>
                <RiUpload2Fill />
              </div>
              <div className='table__actions-item'>
                <RiSettings3Fill onClick={()=> setOpenFilter(!openFilter)} />
                {openFilter && 
                  <div className='table__filters' ref={refFilter}>
                    {head && head.map((item, key) => (
                      <label key={key}>
                        <input 
                          type="checkbox"
                          defaultChecked={item.selected}
                          onChange={()=>handleColumnSelection(item.name)}
                        />
                        <span>{item.name}</span>
                      </label>
                    ))}
                  </div>
                }
              </div>
              <div className='table__actions-item'>
                <BiPlus />
              </div>
            </div>
          }
          
        </div>
      ) : '' }
      
      <table className='table'>
        {isShowHead && 
          <thead>
            <tr>
              {head && head.map(item => (
                item.selected && <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
        }
        <tbody>
            {body && filteredData.map((item,key) => (
              <tr key={key}>
                { isActions ? 
                  head.map((column) => column.selected && <td key={column.key}>{item[column.key]}</td>) :
                  <>
                    {item.id && isShowHead && <td>{item.id}</td> }
                    <td>{item.contract}</td>
                    <td>{item.offer}</td>
                    <td>{item.data}</td>
                  </>
                }
              </tr>
            ))}
        </tbody>
      </table>
      {isNewData &&
        <div className='table__footer'>
          {openForm && <Form />}
          <button onClick={() => setOpenForm(!openForm)}>Yeni Ekle</button>
        </div>
      }
    </div>
  )
}
