import React, { useState } from 'react'
import "./AgeCalculator.css"

export default function AgeCalculator() {

    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if (monthDiff < 0 || (monthDiff == 0 && today.getDate() < birthdateDate.getDate()))
        {
            age--;
        }
            setAge(age);


    }

    const resetcalculator=()=>{
        setBirthdate('');
        setAge(0);
    }


    return (
        <div className='Container'>
            <h2 className='heading container_title'>Age Calculator</h2>
            <p className='para container_title'>The Age Calculator can determine the age or interval between two dates.The calculated age will be displayed in years.</p>

            <div className='Container_middle'>

                <div className='right'>

                    <h4>Date of Birth</h4>
                    <input className='date' type='date' value={birthdate} onChange={e => setBirthdate(e.target.value)} /><br></br><br></br>
                    <div className='button_div'>
                        <button className='button-65' alt="Calculate Age" onClick={calculateAge}>
                            <i>c</i>
                            <i>a</i>
                            <i>l</i>
                            <i>c</i>
                            <i>u</i>
                            <i>l</i>
                            <i>a</i>
                            <i>t</i>
                            <i>e</i>
                            <i>&nbsp;</i>
                            <i>A</i>
                            <i>g</i>
                            <i>e</i>

                        </button>

                        <button className='button-65' alt="Reset" onClick={resetcalculator}>
                            <i>R</i>
                            <i>e</i>
                            <i>s</i>
                            <i>t</i>

                        </button>

                    </div>
                </div>
                <div className='left'>
                    <div className='Container_midle_para'>
                        <h1>Your Age Is</h1>
                    </div>
                    <h1 className='age_heading'>{age > 0 ? `${age}` : ''}</h1>


                </div>



            </div>

        </div>
    )
}
