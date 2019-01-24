import { createContext } from "react";

export const MessageContext = createContext(undefined);

export * from "./MessageManager";
export default MessageContext.Consumer;
