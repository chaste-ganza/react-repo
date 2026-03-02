import styles from "./input.module.css"

function Input(type){
    return (
        <input type={type} className={styles.input}></input>
    )
}

export default Input;