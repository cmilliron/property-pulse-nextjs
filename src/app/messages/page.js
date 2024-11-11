import React from "react";
import connectDb from "@/config/database";
import "@/models/PropetySchema";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/Message";

async function MessagesPage() {
  connectDb();

  const { userId } = await getSessionUser();

  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate("property", "name");

  const unreadMessages = await Message.find({ recipient: userId, read: false })
    .sort({ createdAt: -1 })
    .populate("property", "name");

  const allMessages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializableObject(messageDoc);
    message.sender = convertToSerializableObject(messageDoc.sender);
    message.property = convertToSerializableObject(messageDoc.property);
    return message;
  });

  return (
    <section className="bg-blue-50">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-mb border m-4 md:m-0">
        <h1 className="text-3xl font-bold mb-4">Your messages</h1>
        <div className="sapce-y-4">
          {allMessages.length === 0 ? (
            <p>You have no messages.</p>
          ) : (
            allMessages.map((message, index) => (
              <h3 key={index}>{message.body}</h3>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MessagesPage;
