import React, { useContext } from 'react';

import { PaginationContext }  from '../context/paginationCo'


function ChengeNumberOfPages  () {

const pagination = useContext(PaginationContext);
const changHandler = (e) =>{
    pagination.setItem(e.target.value)
}
  
    return (
      <>
       <select onChange={changHandler}>
           <option value='3'>3</option>
           <option value='5'>5</option>
           <option value='7'>7</option>
       </select>
       change number of Items in the pages

      </>
    );
  
}
export default ChengeNumberOfPages;