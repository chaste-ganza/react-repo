import styles from './button.module.css'

function Fbutton (props) {
    return <button type={props.type} className={styles.button}>
        {props.content}
        </button>
}

export default Fbutton;