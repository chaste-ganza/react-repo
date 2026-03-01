import styles from "./login.module.css"
import Fbutton from "../components/button";
import Mascot from "../components/mascot";

function Login(){
    return (
        <div className={styles.background}>
            <div className={styles.leftBox} >
                <Mascot/>
                <h1 className={styles.title}>Aurlo</h1>
                <h2 className={styles.subTitle}>Stay one step ahead with us</h2>
            </div>
            <div className={styles.rightBox}>
                <form action="" className={styles.form}>
                    <h1 className={styles.formTitle}>Login</h1>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" name="email" required/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password" >Password</label>
                        <input type="password" placeholder="Enter password" required/>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Fbutton content="Login" type="reset"/>
                        <Fbutton content="Register" type="reset"/>

                    </div>
                    
                </form>
            </div>
        </div>
    )
}


export default Login;