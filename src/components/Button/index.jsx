import classes from './styles.module.css'

function Button() {

    const handleClick = () => console.log('Clicked!!!')

    return (
        <div>
            <button onClick={handleClick} className={classes.button}>Button</button>
        </div>
    )
}

export default Button