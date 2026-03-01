import styles from "./input.module.css"

function input(type){
    return (
        <input type={type} className={styles.input}></input>
    )
}

export default input;