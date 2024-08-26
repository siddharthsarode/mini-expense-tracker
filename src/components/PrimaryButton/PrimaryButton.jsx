import styles from "./PrimaryButton.module.css";
function PrimaryButton({ text, type, onClick, icon }) {
    return (
        <button type={type} onClick={onClick} className={styles.primaryBtn}>
            <span className="icon">{icon} </span>
            <span>{text}</span>
        </button>
    );
}

export default PrimaryButton;
