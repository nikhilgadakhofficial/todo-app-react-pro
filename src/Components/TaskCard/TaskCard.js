import React from 'react'
import './TaskCard.css'
import imgDelete from "./trash.png"
function TaskCard({title,catergor,delFunetion,index}) {
  return (
    <div>
          <div className='task'>
                <h2 className='task-titile'>{title}</h2>
                <span className='tltile-ca'>{catergor}</span>

                <img  src={imgDelete} alt='delete' className='icon-img'onClick={()=>{
                    delFunetion(index)
                }} />
            </div>
    </div>
  )
}

export default TaskCard