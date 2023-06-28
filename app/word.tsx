'use client';
import { useState } from 'react';

export default function Word() {

  const [word, set_word]=useState('')
  const [time_of_day, set_time_of_day]=useState('')
  const [day, set_day]=useState('')
  const positiveWords = ["Awesome","Great","Amazing","Wonderful","Fantastic","Super","Nice","Good","Excellent","Perfect","Incredible","Brilliant","Fabulous","Terrific","Outstanding","Spectacular","Splendid","Superb","Phenomenal","Stupendous","Astonishing","Unbelievable","Mind-blowing","Unreal","Breathtaking","Impressive","Remarkable","Exceptional","Extraordinary","Stunning","Marvellous","Magnificent","Bewitching","Delightful","Enchanting","Captivating","Charming","Divine","Gorgeous","Heavenly","Lovely","Ravishing","Sublime","Exquisite","Delicious","Delectable","Exquisite","Astounding","Miraculous"]
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  setInterval(()=>{
    const day = days[new Date().getDay()];
    set_day(day)
    const word = positiveWords[new Date().getDate()%positiveWords.length];
    set_word(word)
    const hour = new Date().getHours();
    const time_of_day = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
    set_time_of_day(time_of_day)  
  }, 1000)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
        <div>
          <div className="text-5xl justify-center  relative flex place-items-center">
            <p className="huge">{word}!</p>
          </div>
        </div>
        <p className="text-4xl">{ word ? "Good "+time_of_day+" on this "+ word + " " +day : ""}</p>
      
    </div>
  )
}