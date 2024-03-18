import classes from './styles.module.css'
import PropTypes from 'prop-types'

function Student(props) {

    return(
        <div className={classes.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

Student.defaultProps = {
    name: 'Default nane',
    age: 0,
}

export default Student;