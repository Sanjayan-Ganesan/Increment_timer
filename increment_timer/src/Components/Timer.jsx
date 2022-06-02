import React, { useEffect } from 'react'
import Counter from '../Components/Counter'

const Timer = () => {

const[time,settime] = React.useState(0);



useEffect(()=>{


    const timer= setInterval(()=>{
        if(time === 100){
            clearInterval(timer);
        }else{
            settime ((prev) => prev + 1);
        }





        
    },1000)


    return ()=>{
        clearInterval(timer);
    }

},[time]);


  return (
    <div>

        <Counter time={time}/>
    </div>
  )
}

export default Timer