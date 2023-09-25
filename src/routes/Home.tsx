import { UserProps } from '../types/user'
import { useState } from 'react'
import Search from '../components/Search'
import User from '../components/User'
import Error from '../components/Error'
import Loading from '../components/Loading'

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false)
    setUser(null)
    setLoading(true)

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()
    console.log(data)

    if (res.status === 404) {
      setError(true)
      setLoading(false)
      return
    }

    setLoading(false)

    const { avatar_url, login, location, bio, html_url } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      bio,
      html_url,
    }

    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {loading && <Loading />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}

export default Home
