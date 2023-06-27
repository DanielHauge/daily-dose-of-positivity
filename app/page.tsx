
export default function Home() {

  const positiveWords = ["Awesome","Great","Amazing","Wonderful","Fantastic","Super","Nice","Good","Excellent","Perfect","Incredible","Brilliant","Fabulous","Terrific","Outstanding","Spectacular","Splendid","Superb","Phenomenal","Stupendous","Astonishing","Unbelievable","Mind-blowing","Unreal","Breathtaking","Impressive","Remarkable","Exceptional","Extraordinary","Stunning","Marvellous","Magnificent","Bewitching","Delightful","Enchanting","Captivating","Charming","Divine","Gorgeous","Heavenly","Lovely","Ravishing","Sublime","Exquisite","Delicious","Delectable","Exquisite","Astounding","Miraculous"]
  const word = positiveWords[new Date().getDate()%positiveWords.length];
  const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()]
  const hour = new Date().getHours();
  const time_of_day = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";



  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <div className="text-5xl justify-center  relative flex place-items-center before:absolute before:h-[700px] before:w-[1200px] before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-10 after:h-[140px] after:w-[340px] after:translate-x-1/6 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ffff00] after:dark:opacity-40 before:lg:h-[360px]">
          <p className="huge">{word}!</p>
        </div>
      </div>
      <p className="text-4xl">{"Good "+time_of_day+" on this "+ word + " " +day}</p>
    </main>
  )
}
