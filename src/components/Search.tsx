type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState } from 'react'

import { BsSearch } from 'react-icons/bs'

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState('')

  return (
    <div>
      <h2>User Search:</h2>
      <p>Discover the best repositories</p>
      <div>
        <input type="text" placeholder="Enter a user name" onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search
