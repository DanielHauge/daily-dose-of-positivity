
'use client';
import { useState } from 'react';
import Countdown from './components/countdown';
import Word from './components/word';

export default function Home() {

  const [hour, set_hour] = useState(new Date().getHours())
  setInterval(()=>{
    const now = new Date().getHours()
    if (hour !== now){
      set_hour(now)
    }
  },1000)
  
  return (
    <main>
      {hour < 9 ? <Countdown />: <Word />}  
    </main>
  )
}
