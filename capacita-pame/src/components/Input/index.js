import React from "react";
import "./styles.css";

function InputDeToDo({ valor, digitando, addItemToList }) {
  return (
    <div className="containerInput">
      <input
        type="text"
        placeholder="Adicione um item"
        value={valor}
        onChange={(evento) => digitando(evento.target.value)}
      ></input>
      <button onClick={addItemToList}> Adicionar</button>
    </div>
  );
}

export default InputDeToDo;
