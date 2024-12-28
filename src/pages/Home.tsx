import React from "react";
import MessageGenerator from "../components/MessageGenerator";
import LinkCreator from "../components/LinkCreator";

const Home: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const recipientName = params.get("recipient") || "Friend";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8">
      <MessageGenerator recipientName={recipientName} />
      <LinkCreator currentRecipient={recipientName} />
    </div>
  );
};

export default Home;
