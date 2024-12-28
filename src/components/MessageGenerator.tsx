import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Props {
  recipientName: string;
}

const MessageGenerator: React.FC<Props> = ({ recipientName }) => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        // Hard-code the API key here
        const genAI = new GoogleGenerativeAI("AIzaSyD4X2KRt8r9TGD-8uUtAK_qWq58F_34big"); // Replace with your actual API key

        // If you want to add more validation here, you can check for an empty string
        if (!genAI) {
          console.error("API Key is not set correctly.");
          setMessage("Happy New Year! (API Key not set)");
          setLoading(false);
          return;
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Update the prompt to refer to the year 2025 explicitly
        const result = await model.generateContent({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Write a unique Happy New Year message for ${recipientName}, and make sure to refer to the year 2025.`
                }
              ]
            }
          ],
        });

        const response = result.response;
        const generatedMessage = response.text() || "Happy New Year 2025!";

        setMessage(generatedMessage);
      } catch (error) {
        console.error("Error generating message:", error);
        setMessage("Happy New Year 2025! (Error generating message)");
      } finally {
        setLoading(false); // Set loading to false after fetching (success or error)
      }
    };

    fetchMessage();
  }, [recipientName]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-md mx-auto my-8">
      <h1 className="text-2xl font-bold text-green-600 md:text-3xl">
        🎉 Happy New Year 🎉
      </h1>
      <p className="mt-4 text-lg font-medium text-gray-800 md:text-xl">
        Dear <span className="font-semibold">{recipientName}</span>,
      </p>
      {loading ? ( // Display loading indicator
        <p className="mt-6 text-gray-600 italic text-base md:text-lg">Loading message...</p>
      ) : (
        <p className="mt-6 text-gray-600 italic text-base md:text-lg">
          "{message}"
        </p>
      )}
    </div>
  );
};

export default MessageGenerator;
