import React, { useState } from 'react';
import Crs from '../images/cross.png';
import Del from '../images/del.png';
import Edt from '../images/edt.png';
import Edfo from './Edfo'; // Import the Edfo component

const CardElement = ({ boardName, onDelete }) => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cards, setCards] = useState([]);
  const [editingCardIndex, setEditingCardIndex] = useState(null);
  const [isEdfoOpen, setIsEdfoOpen] = useState(false);

  const handleAddCard = () => {
    if (cardName.trim()) {
      setCards([...cards, { name: cardName, details: '' }]);
      setCardName('');
      setShowAddCard(false);
    }
  };

  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleEditCard = (index) => {
    setEditingCardIndex(index);
    setIsEdfoOpen(true);
  };

  const handleSaveCard = (updatedCard) => {
    const updatedCards = [...cards];
    updatedCards[editingCardIndex] = updatedCard;
    setCards(updatedCards);
    setIsEdfoOpen(false);
  };

  return (
    <div className='h-auto w-80 bg-white rounded-2xl bg-opacity-0  flex-col'>
      <div className='h-11 w-80 rounded-2xl font-semibold pl-3 bg-white bg-opacity-70 flex items-center'>
        {boardName}
        <img
          className='w-5 hover:cursor-pointer hover:scale-95 ml-auto mr-3'
          src={Del}
          alt="Delete"
          onClick={onDelete}
        />
      </div>

      {cards.map((card, index) => (
        <div key={index} className='mt-3 h-11 w-80 pl-4 bg-white rounded-2xl flex items-center bg-opacity-70 shadow-2xl'>
          {card.name}
          <img
            className='w-7 mr-2 ml-auto hover:cursor-pointer hover:scale-125'
            src={Edt}
            alt="Edit"
            onClick={() => handleEditCard(index)}
          />
          <img
            className='w-5 mr-3 hover:cursor-pointer hover:scale-125'
            src={Del}
            alt="Delete"
            onClick={() => handleDeleteCard(index)}
          />
        </div>
      ))}

      <div className='mt-5'>
        <button
          onClick={() => setShowAddCard(!showAddCard)}
          className='w-80 h-11 bg-white bg-opacity-70 rounded-xl flex items-center justify-center hover:scale-95 hover:bg-slate-200'
        >
          Add Card +
        </button>
      </div>

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
            onClick={() => setShowAddCard(false)}
          />
        </div>
      )}

      {isEdfoOpen && (
        <Edfo
          card={cards[editingCardIndex]}
          onSave={handleSaveCard}
          onClose={() => setIsEdfoOpen(false)}
        />
      )}
    </div>
  );
};

export default CardElement;
