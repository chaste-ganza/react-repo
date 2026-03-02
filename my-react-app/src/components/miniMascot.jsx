import styles from './miniMascot.module.css'

function MiniMascot(props){
    return(
        <div className={styles.mascotContainer}>
            <div className={styles.mascot}>
                <div className={styles.upperPart}>
                    <div className={styles.eyeContainer}>
                        <div className={styles.eye}>
                            <div className={styles.upperEye}>
                                <div className={styles.eyeSpark}></div>
                            </div>
                            <div className={styles.lowerEye}>
                                <div className={styles.underCover}></div>
                            </div>
                        </div>
                        <div className={styles.eye}>
                            <div className={styles.upperEye}>
                                <div className={styles.eyeSpark}></div>
                            </div>
                            <div className={styles.lowerEye}>
                                <div className={styles.underCover}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerPart}>
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

export default MiniMascot;