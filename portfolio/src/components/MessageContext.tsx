import { createContext } from "react";

interface MessageContextType {
  defaultMessageValue: string;
  setDefaultMessageValue: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageContext = createContext<MessageContextType>({
  defaultMessageValue: "",
  setDefaultMessageValue: () => {}
});