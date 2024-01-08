import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const SearchFilter: React.FC = () => {
    const initialItems: Item[] = [
    { id: 1, name: 'Harsh' },
    { id: 2, name: 'Harshvi' },
    { id: 3, name: 'Heet' },
    { id: 4, name: 'Shavial' },
    { id: 5, name: 'smit' },
    { id: 6, name: 'Ayush'}
  ];

  const [items, setItems] = useState<Item[]>(initialItems);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    const newitems: Item[] = initialItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  
    setItems(newitems);
    setSearchQuery(query);
  };
  



  return (
    <div>
          <h3>SEARCHFILTER</h3>
      <input
        type="text"
        placeholder="Search items"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {items.length > 0 ? (
      <ul>
        {searchQuery&&items.map(item => (
         <li key={item.id}>{item.name}</li> 
        ))}
      </ul>):(
        <ul>
            <li>Nothing to show</li>
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;




