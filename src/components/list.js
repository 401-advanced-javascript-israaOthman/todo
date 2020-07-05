import React, { useState, useEffect } from 'react';

function TodoList({list,handleComplete}){
  console.log('ddd',list); 

  return (
    <ul>
      {list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => handleComplete(item._id)}>
            {item.text}  |  {item.difficulty}  |  {item.assignee} 
          </span>
        </li>
      ))}
    </ul>
  );
}


// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}  |  {item.difficulty}  |  {item.assignee} 
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default TodoList;