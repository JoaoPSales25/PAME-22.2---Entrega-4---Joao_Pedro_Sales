import React from "react";
import Header from "../Header";
import InputDeToDo from "../Input";
import ListaDeToDos from "../Lista";
import { useState, useEffect } from "react";
import "./styles.css";

function ToDoList() {
  const [newItem, setNewItem] = useState("");

  const [arrayDeToDos, setArrayDeToDos] = useState([]);

  const [contador, setContador] = useState(0);

  function addItemToList() {
    console.log(newItem);

    if (newItem == "") {
      alert("escreva um item");
      return;
    }

    const newToDo = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setArrayDeToDos((arrayAntigo) => {
      return [...arrayAntigo, newToDo];
    });

    setNewItem("");

    setContador(contador + 1);
  }

  useEffect(() => {
    alert("Adicione itens na lista de afazeres");
  }, []);

  return (
    <div className="container">
      <Header contador={contador}></Header>
      <InputDeToDo
        valor={newItem}
        digitando={setNewItem}
        addItemToList={addItemToList}
      ></InputDeToDo>
      <ListaDeToDos arrayDeToDos={arrayDeToDos}></ListaDeToDos>
    </div>
  );
}

export default ToDoList;
