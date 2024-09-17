import React, { useState } from 'react';
import AddCard from './AddCard'; // Import AddCard component

const YourParentComponent = () => {
  const [showAddCard, setShowAddCard] = useState(false);

  const handleCloseAddCard = () => {
    setShowAddCard(false);
  };

  return (
    <div>
      {/* Toggle AddCard Component */}
      {showAddCard && <AddCard onClose={handleCloseAddCard} />}
      
      <button onClick={() => setShowAddCard(true)}>
        Show Add Card
      </button>
    </div>
  );
};

export default YourParentComponent;
