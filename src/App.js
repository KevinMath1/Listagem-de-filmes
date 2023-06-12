import React, { useState } from 'react';


function App() {

  
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const editItem = (index) => {
    const newItemValue = prompt('Digite o novo texto:');
    if (newItemValue.trim() !== '') {
      const newItems = [...items];
      newItems[index] = newItemValue.trim();
      setItems(newItems);
    }
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    
    
    <div className="container">
      <h1>Minha Lista de Filmes e Séries</h1>

      <div id="lista">
        <ul id="items">
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => editItem(index)}>Editar</button>
              <button onClick={() => deleteItem(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>

      <div id="cadastro">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite o nome do filme ou série"
        />
        <button onClick={addItem}>Adicionar</button>
      </div>
    </div>
   
  );
}

export default App;