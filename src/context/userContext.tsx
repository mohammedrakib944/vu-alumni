"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  useEffect,
} from "react";
import axiosBase from "@/axios/baseURL";

// Define your context type
interface UserContextProps {
  user: any;
  setUser: Dispatch<any>;
}

const UserContext = createContext<UserContextProps | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      let local_user: any = localStorage.getItem("user");
      local_user = JSON.parse(local_user);
      if (!local_user) return;
      try {
        const response = await axiosBase.get("/user/" + local_user.id);
        setUser(response?.data?.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
