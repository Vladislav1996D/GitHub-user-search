import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classes from './User.module.css'

const User = ({ avatar_url, login, location, bio, html_url }: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={classes.info}>
        <div>
          <span>{bio}</span>

          <div style={{ display: 'inline' }}>
            Link to Github:{' '}
            <Link to={html_url} target="_blank">
              {html_url}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
