import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addData } from '../stores/tables';

export default function Form() {
  const dispatch = useDispatch();

  const [formNo, setFormNo] = useState('');
  const [formKontrat, setFormKontrat] = useState('');
  const [formTeklif, setFormTeklif] = useState('');
  const [formData, setFormData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({id:formNo, contract: formKontrat, offer: formTeklif, data: formData}))
  }

  return (
    <form>
      <input 
        type="text"
        onChange={e => setFormNo(e.currentTarget.value)} 
        name='form-id'
        value={formNo}
        placeholder='no giriniz.' />
      <input 
        type="text"
        onChange={e => setFormKontrat(e.currentTarget.value)} 
        name='form-kontrat'
        value={formKontrat}
        placeholder='kontrat giriniz.' />
      <input 
        type="text"
        onChange={e => setFormTeklif(e.currentTarget.value)} 
        name='form-teklif'
        value={formTeklif}
        placeholder='teklif giriniz.' />
      <input 
        type="text"
        onChange={e => setFormData(e.currentTarget.value)} 
        name='form-data'
        value={formData}
        placeholder='data giriniz.' />
      <button 
        type='submit' 
        onClick={e=> handleSubmit(e)}>
        Kaydet
      </button>
    </form>
  )
}
