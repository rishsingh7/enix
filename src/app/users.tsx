import { useEffect, useState } from "react"

interface User {
    firstName?: string;
    lastName?: string;
    age?: number;
    height?: number;
    phone?: number;
    email?: string;
    id: never | number;
  }

export default function Users({users, handleUserDetails}: any){
    // const [users, setUsers] = useState([])
    // const [userDisplay, setuserDisplay] = useState<User | any>({})

    //   const handleUserDetails = (user: User) => {
    //     setuserDisplay(user)
    //   }
     
    console.log("user--", users);

    return (
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

    )
}