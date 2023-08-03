// InputComponent.js
import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setParent, setSelectedValue } from '../redux/items/action';
import '../css/style.css'


const InputComponent = () => {
  const dispatch = useDispatch()
  const  selectValue  = useSelector((e) => e.selectedValue);

  const [inputValue, setInputValue] = useState('');
  const  itemsArray  = useSelector((e) => e.items);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectValue){
      dispatch(setParent({parent:selectValue ,child:inputValue}))
    }else{
      dispatch(setParent({parent:inputValue ,child:""}))
    }
    dispatch(addItem(inputValue));
    dispatch(setSelectedValue(''))
    setInputValue('');
  };


  const selectChange = (e) => {
   const parentValue = e.target.value;
   console.log("parentValue",parentValue)
   dispatch(setSelectedValue(parentValue))
 };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Assigmnet</h1>
      <div className="formcontainer">
      <hr/>
      <div className="container">
        <label for="uname"><strong>Enter your value</strong></label>
      <input type="text" value={inputValue} onChange={handleChange} required/>
        <label for="psw"><strong>Parent Data</strong></label>
        <select value={selectValue} onChange={selectChange} className='input-field'>
        <option value="" defaultValue="">
          Select an item
        </option>
        {itemsArray?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      </div>
      <button type="submit">Submit</button>
    
      </div>
    </form>
  );
};

export default InputComponent;
