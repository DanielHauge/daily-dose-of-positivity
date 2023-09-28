'use client';

export default function Word() {

    const positiveWords = ["Awesome", "Great", "Amazing", "Wonderful", "Fantastic", "Super", "Nice", "Good", "Excellent", "Perfect", "Incredible", "Brilliant", "Fabulous", "Terrific", "Outstanding", "Spectacular", "Splendid", "Superb", "Phenomenal", "Stupendous", "Astonishing", "Unbelievable", "Mind-blowing", "Unreal", "Breathtaking", "Impressive", "Remarkable", "Exceptional", "Extraordinary", "Stunning", "Marvellous", "Magnificent", "Bewitching", "Delightful", "Enchanting", "Captivating", "Charming", "Divine", "Gorgeous", "Heavenly", "Lovely", "Ravishing", "Sublime", "Exquisite", "Delicious", "Delectable", "Exquisite", "Astounding", "Miraculous", "Elegant", "Mumbo Jumbo", "Baronial", "Charismatic", "Chipper", "Dreamy", "Electrifying", "Empowered", "Enticing", "Alluring", "Exhilarating", "Gleaming", "Impeccable", "Flawless", "Irresistible", "Jolly", "Kind-hearted", "Legendary", "Nifty", "Peachy", "Phenomenal", "Rad", "Revolutionary", "Sensational", "Striking", "Vibrant", "Vivacious", "Wondrous", "Xenodochial"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = days[new Date().getDay()];
    // Compute day of the year (1-365)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const word = positiveWords[dayOfYear % positiveWords.length];
    const hour = new Date().getHours();
    const time_of_day = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";


    return (
        <div className='flex min-h-screen flex-col items-center justify-center p-24'>
            <div>
                <div className="text-5xl justify-center  relative flex place-items-center">
                    <p className="huge pop-outin">{word}</p>
                </div>
            </div>
            <p className="text-4xl lineUp">{word ? "Good " + time_of_day + " on this " + word + " " + day : ""}</p>
        </div>
    )
}
