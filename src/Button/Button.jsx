import styles from './Button.module.css'

function Button() {

    const styles1 = {
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }
    return (
        <>
        // ? 2. MODULES
            <button className={styles.button}>Click me</button>
        // ? 3. INLINE
            <button style={styles1}>Click me</button>
        </>

    );
};

export default Button;