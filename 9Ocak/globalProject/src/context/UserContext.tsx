import { createContext, useState } from "react";

export const UsersListContext = createContext({} as UsersListContextType);

export const UsersListProvider =({ children }: any) => {
  const [usersList, setUsersList] = useState<string[]>([]);

  return (
    <UsersListContext.Provider value={{ usersList, setUsersList }}>
      {children}
    </UsersListContext.Provider>
  );
};

export interface UsersListContextType {
  usersList: string[];
  addUserName : (userName: string[]) => void;
}