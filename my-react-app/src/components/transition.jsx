import styles from './transition.module.css'

function Transition(){
    return(
        <div className={styles.background}>
            <div className={styles.strip1}></div>
            <div className={styles.strip2}></div>
            <div className={styles.strip3}></div>
            <div className={styles.strip4}></div>
            <div className={styles.strip5}></div>
        </div>
    )
}

export default Transition;