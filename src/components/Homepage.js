
import { useState, useEffect, useCallback } from 'react';
//import reggiePic from '../assets/images/PGJP5740.JPG';
import placeHolderPic from '../assets/images/logo192.png';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
      {
        value,
        onChange: (e) => setValue(e.target.value)
      },
      () => setValue(initialValue)
    ]
}

function Homepage () {
    let [colorProps, resetColor] = useState('#000000');
    let [titleProps, resetTitle] = useInput("");
    let [appointmentList, setAppointmentList] = useState([])

    const fetchData = useCallback(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data =>{
            setAppointmentList(data)
        });
        console.log(appointmentList);
    }, [])
    
    useEffect(() => {
        fetchData()
    }, [fetchData]);
  
    const submit = (e) => {
      e.preventDefault();
      alert(`${titleProps.value}, ${colorProps.value}`);
      resetTitle();
      resetColor();
}

    return (
        <div>
            <h1>Hi, I'm Mel</h1>
            <img height={200} src={placeHolderPic} alt="placeholder"></img>

            <form onSubmit={submit}>
                <input type='text' placeholder='color tilte' {...titleProps}></input>
                <input type='color' {...colorProps}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Homepage;
