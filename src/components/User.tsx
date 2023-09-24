import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
// import { Link } from 'react-router-dom'

const User = ({ avatar_url, login, location, bio, url }: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div>
        <span>{bio}</span>
        <span>{url}</span>
      </div>
      {/* <Link to='/'></Link> */}
    </div>
  )
}

export default User
