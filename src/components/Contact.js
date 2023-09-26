import React, { useReducer, useState } from 'react';

function Contact() {
    const [checked, setChecked] = useReducer(checked => !checked, false);
    let [toggleForm, setToggleForm] = useState(false)

    return (
        <div>
        <h1>Contact me on this page</h1>
        <input type='checkbox' value={checked} onChange={() => {setChecked(); setToggleForm(!toggleForm)}}></input>
        <label>Sign me up for ur newsletter</label>

        {
          toggleForm &&
          <div>
            <input type="text"></input>
          </div>
        }
      </div>
  

    )
}

export default Contact;