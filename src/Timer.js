import{motion} from "framer-motion";
import { useState, useEffect } from 'react';

function Timer(){
const [seconds, setSeconds] = useState(60);
const [isRunning,setIsRunning] = useState(false);
const[text,setText] = useState("Click 'start' to begin timer")


useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setSeconds(seconds - 1), 1000);
      if(seconds===0){
        setIsRunning(false);
      }
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);
 
    const Start = () => {
        setText("Inhale as circle expands and begin to exhale as circle shrinks")
        setIsRunning(true);
      };
      const Stop = () =>{
        setText("Click 'start' to resume timer")
        setIsRunning(false);
      };
    
    const Reset = () => {
        setText("Click 'start' to begin timer")
        setSeconds(60);
        setIsRunning(false);
      };
    

    return(
        <div className ="Grid-container">
            <div className="timer-display">
                <motion.div className="animate" animate={{
                    scale:1.65,
                    transition: {
                        duration:8,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }
                }}></motion.div>
                <div className="content">{seconds}</div>
                <h4 className="med-desc">{text}</h4>
                </div>
          <div className="flex-container">
          <button onClick={Start}>Start</button>
          <button onClick={Stop}>Stop</button>
          <button onClick={Reset}>Reset</button>
        </div>
        <div className="timer-bottom"></div>
        </div>
    );

}
export default Timer;