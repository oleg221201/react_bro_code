import { useState } from "react"

function Car () {

    const [car, setCar] = useState ({
        year: 2024,
        mark: "Ford",
        model: "Mustang"
    });

    function handleYearChange (event) {
        // setCar({...car, year: event.target.value});

        setCar((prevCar) => ({...prevCar, year: event.target.value}))
    }

    function handleMarkChange (event) {
        // setCar({...car, mark: event.target.value});

        setCar((prevCar) => ({...prevCar, mark: event.target.value}))
    }

    function handleModelChange (event) {
        // setCar({...car, model: event.target.value});

        setCar((prevCar) => ({...prevCar, model: event.target.value}))
    }
    
    return (
    <div>
        <p>Your favorite car is: {car.year} {car.mark} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange} /><br/>
        <input type="text" value={car.mark} onChange={handleMarkChange}/> <br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>
    );
}

export default Car