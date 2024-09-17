import React, { useState } from 'react';
import bg1 from '../images/bg1.jpg';
import bg10 from '../images/bg10.jpg';
import bg11 from '../images/bg11.jpg';
import bg12 from '../images/bg12.jpg';
import bg13 from '../images/bg13.jpg';
import bg14 from '../images/bg14.jpg';
import bg15 from '../images/bg15.jpg';
import bg16 from '../images/bg16.jpg';
import bg17 from '../images/bg17.jpg';
import bg18 from '../images/bg18.jpg';
import bg19 from '../images/bg19.jpg';
import bg2 from '../images/bg2.jpg';
import bg20 from '../images/bg20.jpg';
import bg21 from '../images/bg21.jpg';
import bg22 from '../images/bg22.jpg';
import bg23 from '../images/bg23.jpg';
import bg24 from '../images/bg24.jpg';
import bg25 from '../images/bg25.jpg';
import bg26 from '../images/bg26.jpg';
import bg27 from '../images/bg27.jpg';
import bg3 from '../images/bg3.jpg';
import bg4 from '../images/bg4.jpg';
import bg5 from '../images/bg5.jpg';
import bg6 from '../images/bg6.jpg';
import bg7 from '../images/bg7.jpg';
import bg8 from '../images/bg8.jpg';
import bg9 from '../images/bg9.jpg';
import Crs from '../images/cross.png';
import l1 from '../images/l1.png';
import CardElement from './CardElement';










const Column = () => {
  const [addBoard, setAddBoard] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [boards, setBoards] = useState([]); // [{ name: 'Board1', cards: [] }]

  const handleAddBoard = () => {
    if (boardName.trim()) {
      setBoards([...boards, { name: boardName, cards: [] }]);
      setBoardName('');
      setAddBoard(false);
    }
  };

  const handleDeleteBoard = (index) => {
    setBoards(boards.filter((_, i) => i !== index));
  };

  const addCardToBoard = (index, cardName) => {
    const updatedBoards = boards.map((board, i) => {
      if (i === index) {
        return { ...board, cards: [...board.cards, cardName] };
      }
      return board;
    });
    setBoards(updatedBoards);
  };

  const deleteCardFromBoard = (boardIndex, cardIndex) => {
    const updatedBoards = boards.map((board, i) => {
      if (i === boardIndex) {
        const updatedCards = board.cards.filter((_, j) => j !== cardIndex);
        return { ...board, cards: updatedCards };
      }
      return board;
    });
    setBoards(updatedBoards);
  };


  const [bgIndex, setBgIndex] = useState(0);  
  // Array of background images
    const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16, bg17, bg18, bg19, bg20, bg21, bg22, bg23, bg24, bg25, bg26, bg27]; // Add more images as needed

    // Function to change the background
    const changeTheme = () => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };
  

  return (

    <div className='h-screen overflow-y-auto  bg-cover bg-center '    style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}   >
      {/* Nav Bar */}
      <div className='bg-slate-500 bg-opacity-15 backdrop-blur-sm shadow-xl h-20 flex items-center pl-3 pr-4'>
        <img className='size-10 hover:scale-95' src={l1} alt="Logo" />
        <div className='text-white pl-3 text-2xl'>Kanban App</div>
        <div className='ml-auto flex items-center justify-center mr-3'>
          <button onClick={changeTheme}  
          className='text-white bg-blue-700/80 h-9 w-20 border-none shadow-2xl rounded-xl hover:bg-blue-500 hover:scale-95'>
            Theme +
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <button className='text-white bg-blue-700/80 h-9 w-20 border-none shadow-2xl rounded-xl hover:bg-blue-500 hover:scale-95'>
            Clear
          </button>
        </div>
      </div>
      {/* Nav Bar Ends Here */}

      {/* Main Content */}
      <div className='w-full h-[calc(100vh-80px)] flex overflow-auto p-4 space-x-4 bg-black bg-opacity-10'>
        {boards.map((board, index) => (
          <CardElement
            key={index}
            boardName={board.name}
            cards={board.cards}
            onDelete={() => handleDeleteBoard(index)}
            onAddCard={(cardName) => addCardToBoard(index, cardName)}
            onDeleteCard={(cardIndex) => deleteCardFromBoard(index, cardIndex)}
          />
        ))}

        <div className='flex flex-col' style={{ minWidth: '20rem' }}>
          {!addBoard && (
            <div
              className='h-11 w-80 bg-white rounded-2xl flex items-center justify-center hover:bg-slate-200 cursor-pointer bg-opacity-70 shadow-2xl hover:scale-95'
              onClick={() => setAddBoard(true)}
            >
              Add Board +
            </div>
          )}

          {addBoard && (
            <div className='items'>
              <div className='h-11 w-80 bg-white rounded-2xl flex items-center bg-opacity-70 shadow-2xl'>
                <input
                  type='text'
                  value={boardName}
                  onChange={(e) => setBoardName(e.target.value)}
                  className='bg-white/70 rounded-xl pl-3 outline-none m-auto placeholder:pl-3'
                  placeholder='Add Board Name'
                />
                <button
                  onClick={handleAddBoard}
                  className='m-auto bg-blue-700/85 rounded-xl flex items-center justify-center w-12 hover:scale-90 shadow-lg text-white font-light'
                >
                  Add
                </button>
                <img
                  onClick={() => setAddBoard(false)}
                  className='w-6 mr-3 hover:cursor-pointer hover:scale-125'
                  src={Crs}
                  alt="Close"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;
