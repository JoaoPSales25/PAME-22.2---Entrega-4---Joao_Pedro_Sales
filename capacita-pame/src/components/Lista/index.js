import React from "react";
import "./styles.css";

function ListaDeToDos({ arrayDeToDos, deleteItem }) {
  return (
    <div>
      {arrayDeToDos.map((item) => {
        return (
          <div className="item" key={item.id}>
            {" "}
            {item.value}{" "}
          </div>
        );
      })}
    </div>
  );
}

export default ListaDeToDos;
