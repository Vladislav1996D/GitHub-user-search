import { FC } from 'react'
import classes from './Loading.module.css'

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.loader}></span>
    </div>
  )
}

export default Loading
