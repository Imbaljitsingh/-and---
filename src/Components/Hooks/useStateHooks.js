import React from 'react'
import './style.css'
const UseStateHooks = () => {
let myData = 0;
const [myNum, setMyNum] = React.useState(myData);

  return (
    <div className='main-div'>
        <div className="main-data">
            {myNum}
        </div>
        <div className="btn-container">
    <button className='btn-style' onClick={ () => setMyNum(myNum + 1)}>+</button>
    <button className='btn-style' onClick={ () => setMyNum(myNum - 1)}>-</button>
    </div>
    </div>
  )
}

export default UseStateHooks