import React, { useState } from 'react';

const Edfo = ({ card, onSave, onClose }) => {
  const [editedName, setEditedName] = useState(card.name);
  const [editedDetails, setEditedDetails] = useState(card.details);

  const handleSave = () => {
    onSave({ name: editedName, details: editedDetails });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white bg-opacity-70 w-4/5 h-3/4 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Edit Card</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Card Name:</label>
          <input 
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full p-2 border rounded-xl bg-white/70 outline-none"
          />
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Card Details:</label>
          <textarea
            value={editedDetails}
            onChange={(e) => setEditedDetails(e.target.value)}
            className="w-full p-2 border rounded-xl bg-white/70 outline-none"
            rows="4"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Today's Date:</label>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={handleSave} className="bg-blue-500 w-20 text-white p-2 rounded-xl">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Edfo;
