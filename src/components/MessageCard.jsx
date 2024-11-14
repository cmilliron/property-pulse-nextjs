"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import markMessageAsRead from "@/app/actions/markMessageAsRead";
import deleteMessage from "@/app/actions/deleteMessage";

function MessageCard({ message }) {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleReadClick = async () => {
    const readStatus = await markMessageAsRead(message._id);
    setIsRead(readStatus);
    toast.info(`Message mark as ${readStatus ? "read" : "unread"}`);
  };

  const handleDeleteClick = async () => {
    const deleteMessageResponse = await deleteMessage(message._id);
    setIsDeleted(deleteMessageResponse);
    if (deleteMessageResponse) {
      toast.success("Message Deleted");
    } else {
      toast.error("There was a problem deleting your message");
    }
  };

  if (isDeleted) {
    return <p>Mesage was deleted.</p>;
  }

  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md">
          New
        </div>
      )}

      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry:</span>
        {message.property.name}
      </h2>
      <p className="text-gray-700">{message.body}</p>

      <ul className="mt-4">
        <li>
          <strong>Name:</strong> {message.name}
        </li>

        <li>
          <strong>Reply Email:</strong>
          <a href={`mailto:${message.email}`} className="text-blue-500">
            {message.email}
          </a>
        </li>
        <li>
          <strong>Reply Phone:</strong>
          <a href={`tel:${message.phone}`} className="text-blue-500">
            {message.phone}
          </a>
        </li>
        <li>
          <strong>Received: </strong>
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>
      <button
        onClick={handleReadClick}
        className={`mt-4 mr-3 text-white py-1 px-3 rounded-md ${
          isRead ? "bg-gray-500" : "bg-blue-500"
        }`}
      >
        {isRead ? "Mark As New" : "Mark As Read"}
      </button>
      <button
        onClick={handleDeleteClick}
        className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"
      >
        Delete
      </button>
    </div>
  );
}

export default MessageCard;
