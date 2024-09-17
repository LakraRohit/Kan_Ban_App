import React, { useState } from 'react';
import Crs from '../images/cross.png';
import Del from '../images/del.png';
import Edt from '../images/edt.png'; // Assuming you have an edit icon

const CardElement = ({ boardName, onDelete }) => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    if (cardName.trim()) {
      setCards([...cards, cardName]);
      setCardName('');
      setShowAddCard(false); // Optionally close the AddCard component after adding
    }
  };

  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className='h-auto w-80 bg-white rounded-2xl bg-opacity-0 shadow-2xl flex-col'>
      <div className='h-11 w-80 rounded-2xl font-semibold pl-3 bg-white bg-opacity-70 flex items-center'>
        {boardName}
        <img
          className='w-5 hover:cursor-pointer hover:scale-95 ml-auto mr-3'
          src={Del}
          alt="Delete"
          onClick={onDelete} // Call the onDelete function when clicked
        />
      </div>

      {/* Render the list of cards */}
      {cards.map((name, index) => (
        <div key={index} className='mt-3 h-11 w-80 pl-4 bg-white rounded-2xl flex items-center bg-opacity-70 shadow-2xl'>
          {name}
          <img
            className='w-7 mr-2 ml-auto hover:cursor-pointer hover:scale-125'
            src={Edt}
            alt="Edit"
            // Add edit functionality here if needed
          />
          <img
            className='w-5 mr-3 hover:cursor-pointer hover:scale-125'
            src={Del}
            alt="Delete"
            onClick={() => handleDeleteCard(index)} // Handle delete card
          />
        </div>
      ))}

      {/* Toggle Add Card Section */}
      <div className='mt-5'>
        <button
          onClick={() => setShowAddCard(!showAddCard)}
          className='w-80 h-11 bg-white bg-opacity-70 rounded-xl flex items-center justify-center hover:scale-95 hover:bg-slate-200'
        >
          Add Card +
        </button>
      </div>

      {/* Show AddCard Component */}
      {showAddCard && (
        <div className='mt-3 h-11 w-80 bg-white rounded-2xl flex items-center bg-opacity-70 shadow-2xl'>
          <input
            type='text'
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className='bg-white/70 rounded-xl pl-3 outline-none m-auto placeholder:pl-3'
            placeholder='Add Card Name'
          />
          <button
            className='m-auto bg-blue-700/85 rounded-xl flex items-center justify-center w-12 hover:scale-90 shadow-lg text-white font-light'
            onClick={handleAddCard}
          >
            Add
          </button>
          <img
            className='w-6 mr-3 hover:cursor-pointer hover:scale-125'
            src={Crs}
            alt="Close"
            onClick={() => setShowAddCard(false)} // Close AddCard component
          />
        </div>
      )}
    </div>
  );
};

export default CardElement;
