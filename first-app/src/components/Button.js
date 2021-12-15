import styles from './Button.module.css';

 export const Button = ({ text, handleClick }) => {

  return (
    <button className={styles.button}  onClick={handleClick}> {text} </button>
  )
}

