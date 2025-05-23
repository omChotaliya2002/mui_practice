import React from 'react';
import Draggable from 'react-draggable';
import { useRef } from 'react';

const DraggableBox = () => {


    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);


  return (

     <Draggable nodeRef={outerRef as React.RefObject<HTMLElement>}>

    <div ref={outerRef} className="w-[200px] h-[200px] flex flex-col items-center justify-center mx-auto mt-[100px] hover:cursor-grab active:cursor-grabbing" style={{border : "1px solid black"}}> 
                Drag me!

        <Draggable nodeRef={innerRef as React.RefObject<HTMLElement>}>

            <div className='flex flex-col items-center justify-center space-y-2' ref={innerRef} style={{border:"1.5px solid red"}}>
                    <button className='w-[70px] h-[26px] bg-black text-white border border-white'> button1 </button>
                    <button className='w-[70px] h-[26px] bg-black text-white border border-white'> button2 </button>
                    <button className='w-[70px] h-[26px] bg-black text-white border border-white'> button3 </button>
            </div>

        </Draggable>

    </div>
       
    </Draggable>

  )
}

export default DraggableBox;