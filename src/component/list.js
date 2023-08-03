// ListComponent.js
import React from 'react';
import { useSelector } from 'react-redux';

const ListComponent = () => {
  const  items  = useSelector((e) => e.listItem);
  return (
<>
    <h1>List of Data</h1>
    {items?.length > 0 ? <ul>
      {items?.map((item) => (
        <>
        <li key={item.parent}>
          {`${item.parent} is parent${item.child ? ` of ${item.child}` : ''}`}
        </li>
       <hr/>
       </>
      ))}
    </ul> : <h4> No Data Found </h4> }
    
    </>
  );
};

export default ListComponent;
