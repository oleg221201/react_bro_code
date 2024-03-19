import classes from './styles.module.css'

function Button(props) {

    const handleClick = () => {
        // eslint-disable-next-line react/prop-types
        const {counter, setCounter} = props;

        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={handleClick} className={classes.button}>Button</button>
        </div>
    )
}

export default Button