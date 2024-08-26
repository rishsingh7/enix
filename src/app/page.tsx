"use client"
import { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import userApi from "../../utilities/userApi";
import DisplayScreen from "./displayScreen";
library.add(fas);
interface User {
  firstName?: string;
  lastName?: string;
  age?: number;
  height?: number;
  phone?: number;
  email?: string;
  id: never | number;
}
export default function Home() {
  const [users, setUsers] = useState([])
  const [userDisplay, setuserDisplay] = useState<User | any>({})
  const fetchData = async () => {
    const data = await userApi.fetchData()
    setUsers(data.users)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleUserDetails = (user: User) => {
    setuserDisplay(user)
  }

  return (
    <div className="flex flex-row">
      <div>
        {
          users && users.map((user: User) => {
            return (
              <div className="flex flex-row">
                <div className="w-40 text-center p-2 border-2">
                  <span className="cursor-pointer" onClick={() => handleUserDetails(user)}>{user.firstName} {''} {user.lastName}</span><br />
                </div>

              </div>
            )
          })
        }
      </div>

      <DisplayScreen user={userDisplay}/>

    </div>
  );
}
