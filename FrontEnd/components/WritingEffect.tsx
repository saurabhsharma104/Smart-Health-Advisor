"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
interface WritingEffectProps{
    text:string;
    onBack:(val:boolean) => void;
    onChangeFn:(val:string)=> void;
    activate:(value:boolean)=>void,
}
const WritingEffect = ({text,onBack,onChangeFn,activate}:WritingEffectProps) => {
    const [displayText,setDisplayText]=useState('')
    const [currentStateIndex,setCurrentStateIndex] = useState(0)
    const [showHomeButtton,setShowHomeButtton] = useState(false)

    const handleOgBack=()=>{
        onChangeFn("basic-information")
        onBack(false)
        activate(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if (currentStateIndex < text.length) {
            setDisplayText((prevText) => prevText + text[currentStateIndex]);
            setCurrentStateIndex((prevIndex) => prevIndex + 1);
          } else {
            clearInterval(interval);
          }
        }, 10);
        if(text.length == currentStateIndex) {
            setShowHomeButtton(true)
        }
        return () => clearInterval(interval);
      }, [currentStateIndex, text]);

  return (
    <div>
        <p className=" leading-6 break-words"  dangerouslySetInnerHTML={{ __html:displayText }}/>
        {showHomeButtton && 
        <div className='text-center mt-5'>
            <Button onClick={handleOgBack}>Go Back</Button>
        </div>}
    </div>
  )
}

export default WritingEffect