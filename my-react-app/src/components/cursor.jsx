import styles from "./cursor.module.css"
import Js from "./cursor.js"

function fcursor(){
    const htmlcursor = (
        <div>
            <div className={styles.cursor}></div>
            <script><Js/></script>
        </div>
    )

    return htmlcursor
    
}

export default fcursor;