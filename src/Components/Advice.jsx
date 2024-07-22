import { useState } from "react";
import '../Styles/Advice.css'

const Advice = () => {

    const [Advice,setAdvice] = useState('Love the Pain');

    const handleClick = async () => {
        try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const response_data = await response.json();
        setAdvice(response_data.slip.advice);
        }
        catch(error){
            setAdvice('Error at getting feed... Give an another shot');
        }
    }

    return (
        <>
          <h1>Todays Motivation</h1>
          <p>{Advice}</p>
          <button onClick={handleClick}>Click</button>
        </>
    );
}

export default Advice;