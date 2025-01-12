import React from 'react'

const Todoitem = (props) => {
  return (
    <div>
        <span>
            <input type="checkbox"/>
            <span className='todo'>{props.text}</span>
        </span>
    </div>
  )
}

export default Todoitem