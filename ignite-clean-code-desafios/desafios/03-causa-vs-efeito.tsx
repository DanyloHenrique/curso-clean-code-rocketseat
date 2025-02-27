// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        // name: 'Joseph Oliveira',
        name: 'Danylo Henrique',
        // github: 'https://github.com/josepholiveira'
        github: 'https://github.com/danylohenrique'

      }
    }
  }
}

export function UserProfile() {
  // const [shouldNotRenderUserName, setShouldNotRenderUserName] = useState(false)
  const [isLoadingUserDate, setIsLoadingUserDate] = useState(false)

  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      // setShouldNotRenderUserName(true)
      setIsLoadingUserDate(true)

      const fetchUserResponse = fetchUser()

      setUserData(fetchUserResponse.data.user)
      
      // setShouldNotRenderUserName(false)
      setIsLoadingUserDate(false)
    }

    loadUser()
  })

  // if (shouldNotRenderUserName) {
  if (isLoadingUserDate) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}


