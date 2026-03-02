import styles from './classChoose.module.css'
import Mascot from '../components/mascot'
import MiniMascot from '../components/miniMascot'
import b_search from '../assets/b_search.png'

function ClassChoose(){
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.leftHeader}>
                        <MiniMascot/>
                        <h2 className={styles.title}>Aurlo workspaces</h2>
                    </div>
                    <div className={styles.rightHeader}>
                        <input type="input"  className={styles.searchInput} /*placeholder={<img src={b_search}></img>}*//>
                    </div>
                    
                </div>
                <div className={styles.body}>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>
                    <div className={styles.workspaceBlock}></div>

                </div>
            </div>
        </div>
    )

}

export default ClassChoose;