'use client';
import { useState } from 'react';

function padLeft(text:string, padChar:string, size:number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
}


export default function Countdown() {
    const now = new Date()
    const reveal = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0, 0)
    const [time_left, set_time_left]=useState('')
    setInterval(()=>{
        const remaining = reveal.getTime() - new Date().getTime()
        const hours = padLeft(String(Math.floor(remaining / (1000 * 60 * 60))), '0', 2)
        const minutes = padLeft(String(Math.floor((remaining / (1000 * 60)) % 60)), '0', 2)
        const seconds = padLeft(String(Math.floor((remaining / 1000) % 60)), '0', 2)
        set_time_left(hours + ":" + minutes + ":" + seconds)
    }, 1000)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
        <div>
          <div className="text-5xl justify-center  relative flex place-items-center">
            <p className="huge">{time_left}</p>
          </div>
        </div>
      
    </div>
  )
}