
'use client';
import { useState } from 'react';
import Countdown from './countdown';
import Word from './word';

export default function Home() {

  const [hour, set_hour] = useState(0)
  setInterval(()=>{
    set_hour(new Date().getHours())
  },1000)

  

  return (
    <main>
      {hour < 9 ? <Countdown />: <Word />}  
    </main>
  )
}
