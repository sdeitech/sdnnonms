import React, { useState } from 'react';

const List = () => {
  // State to hold the list of items
  const [items] = useState([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a To-Do App' },
    { id: 3, title: 'Master JavaScript' },
    { id: 4, title: 'Explore APIs' },
    { id: 5, title: 'Deploy Applications' },
  ]);

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
