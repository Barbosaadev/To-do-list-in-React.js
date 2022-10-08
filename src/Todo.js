import React, { useState } from 'react'
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import List from './components/List';

const Todo = () => {

  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);




  function handleChangeInput(event) {
    const inputTask = event.target.value;


    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return
    };

    setItemsList([...itemsList, task]);

    setTask("");
  }



  return (
    <div className='todo-wrapper'>
      <div className='todo__div-content'>
      <h1>To do List</h1>

      <Form onSubmit={handleAddItemToList}>

        <Input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={ task } />

        <Button type="submit">Adicionar</Button>

      </Form>

      <List itemsList={ itemsList } />
      </div>
  </div>
    
  );
}

export default Todo