"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import GetUnreadMessageCount from "../actions/getUnreadMessageCount";

const GlobalContext = createContext();

// Create Provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    console.log("In Global Provider useEffect()");
    if (session && session.user) {
      GetUnreadMessageCount().then((res) => {
        if (res.count) {
          setUnreadCount(res.count);
        }
      });
    }
  }, [GetUnreadMessageCount, session]);

  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
