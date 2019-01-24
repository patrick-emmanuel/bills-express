import React, { useState } from "react";
import { MessageContext } from './index';

export const MessageManager = ({ children }) => {
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  const queue = [];

  const handleClose = () => {
    setOpened(false)
  };

  const handleExited = () => {
    processQueue();
  };

  const processQueue = () => {
    if (queue.length > 0) {
      setMessage(queue.shift())
      setOpened(true)
    }
  };

  const pushMessage = (message) => {
    queue.push(message);
    if (opened) {
      setOpened(false);
    } else {
      processQueue();
    }
  };

  return (
    <>
      {opened && (
        <div>
          {message}
        </div>
      )}
      <MessageContext.Provider value={pushMessage}>
        {children}
      </MessageContext.Provider>
    </>
  );
}
export default MessageManager;
