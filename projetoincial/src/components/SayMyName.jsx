import styles from './SayMyName.module.css'

export const SayMyName = (props) => {
  return (
    <div className={styles.sayMyName}>
      <p>Fala {props.name}</p>
    </div>
  )
}