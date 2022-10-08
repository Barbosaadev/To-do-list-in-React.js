import React from 'react'

const List = (props) => {
  return (
    <ul className='todo-list'>
        {props.itemsList.map((item, index) => (
          <li className='todo-item' key={ index } > { item } </li>
        ))}
      </ul>
  )
}

export default List