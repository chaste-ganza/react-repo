import styles from './transition.module.css'

const strips = (
        <div className={styles.background}>
            <div className={styles.strip1}></div>
            <div className={styles.strip2}></div>
            <div className={styles.strip3}></div>
            <div className={styles.strip4}></div>
            <div className={styles.strip5}></div>
        </div>
    );


function Transition(){
    return(
        strips
    )
}

export default Transition;