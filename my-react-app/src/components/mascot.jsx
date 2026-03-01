import styles from './mascot.module.css'

function Mascot(){
    return(
        <div className={styles.mascotContainer}>
            <div className={styles.mascot}>
                <div className={styles.upperPart}>
                    <div className={styles.eyeContainer}>
                        <div className={styles.eye}>
                            <div className={styles.eyeSpark}></div>
                        </div>
                        <div className={styles.eye}>
                            <div className={styles.eyeSpark}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerPart}>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                    <div className={styles.under}></div>
                </div>
            </div>
        </div>
    )
}

export default Mascot; 