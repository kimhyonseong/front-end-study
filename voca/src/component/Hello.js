import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <div>
            <p className={styles.box}>Hello</p>
        </div>
    );
}