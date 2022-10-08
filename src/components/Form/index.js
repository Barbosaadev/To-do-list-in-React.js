import React from 'react'

const Form = (props) => {
  return (
    <form className='todo-form' onSubmit={props.onSubmit}> {props.children} </form>
  )
}

export default Form