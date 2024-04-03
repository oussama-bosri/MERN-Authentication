import React, {useState, useEffect}  from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
 
     <center>    
      
      <i class="fas fa-tachometer-alt"></i> {date.toLocaleTimeString()}
   </center>

    
   
  );
}
export default Clock;