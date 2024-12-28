// LinkCreator.tsx
import React, { useState } from "react";

interface Props {
  currentRecipient: string;
}

const LinkCreator: React.FC<Props> = ({ currentRecipient }) => {
  const [nextRecipient, setNextRecipient] = useState<string>(currentRecipient);

  const handleCreateLink = () => {
    const url = `${window.location.origin}/?recipient=${encodeURIComponent(nextRecipient)}`;
    navigator.clipboard.writeText(url);
    alert(`Link copied to clipboard for ${nextRecipient}!`);
  };

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold text-gray-700 text-center md:text-2xl">
        Create a New Link and send to your friend
      </h2>
      <p className="mt-2 text-sm text-gray-500 text-center">
        Share the festive spirit!
      </p>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Your friend's Name (Default: {currentRecipient}):
        </label>
        <input
          type="text"
          className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Enter the recipient's name"
          value={nextRecipient}
          onChange={(e) => setNextRecipient(e.target.value)}
        />
        <button
          onClick={handleCreateLink}
          className="mt-4 w-full py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-200"
        >
          Generate Link
        </button>
      </div>
    </div>
  );
};

export default LinkCreator;
