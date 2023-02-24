import React, { useState, useEffect } from 'react';

export default function Panier() {
  const [panier, setpanier] = useState(
    JSON.parse(localStorage.getItem('panier')) ||[] 
  );
  console.log(localStorage.getItem('panier'))
  console.log(JSON.parse(localStorage.getItem('panier')))

  const addTopanier = item => {
    if (!panier.includes(item)) {
      setpanier([...panier, item]);
    }
  };

  const removeFrompanier = item => {
    setpanier(panier.filter(i => i !== item));
  };

  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier));
  }, [panier]);

  return (
    <div className="App">
      <h1>My React App</h1>
      <ul>
        {panier.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeFrompanier(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTopanier('item1')}>Add Item 1</button>
      <button onClick={() => addTopanier('item2')}>Add Item 2</button>
    </div>
  );
}
