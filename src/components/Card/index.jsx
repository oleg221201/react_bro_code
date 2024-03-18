import classes from "./styles.module.css";

function Header() {

    return(
        <div className={classes.card}>
            <img className={classes.img} src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp" alt="test" />
            <h2 className={classes.title}>Test Name</h2>
            <p className={classes.text}>Description bla bla bla bla</p>
        </div>
    )
}

export default Header