"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const MusicSchoolTestmonials = () => {

    const musicSchoolTestimonails = [
        {
          quote: "Music gives a soul to the universe, wings to the mind, and life to everything.",
          name: "Emily Carter",
          title: "Vocal Student"
        },
        {
          quote: "Every note I play brings me one step closer to my dreams.",
          name: "Michael Reed",
          title: "Piano Student"
        },
        {
          quote: "Learning guitar has taught me patience, discipline, and creativity.",
          name: "Sophia Wilson",
          title: "Guitar Student"
        },
        {
          quote: "Drumming is not just rhythm; it's a way of expressing who I am.",
          name: "James Anderson",
          title: "Drum Student"
        },
        {
          quote: "The violin allows me to tell stories without saying a single word.",
          name: "Olivia Brown",
          title: "Violin Student"
        },
        {
          quote: "Music lessons have given me confidence both on and off the stage.",
          name: "Daniel Harris",
          title: "Keyboard Student"
        },
        {
          quote: "Singing has helped me discover my voice and my passion.",
          name: "Ava Thompson",
          title: "Vocal Student"
        },
        {
          quote: "Every practice session feels like an adventure into a new world of sound.",
          name: "Ethan Walker",
          title: "Piano Student"
        },
        {
          quote: "Music connects people in ways that words never can.",
          name: "Grace Miller",
          title: "Guitar Student"
        },
        {
          quote: "The academy has transformed my love for music into real skill.",
          name: "Noah Davis",
          title: "Drum Student"
        }
      ]

    

  return (
    <div className='h-[40rem] w-full bg-black bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px] relative flex flex-col items-center justify-center overflow-hidden'>
        <h2 className='text-center font-bold text-teal-500 mb-8 z-10 text-3xl pt-10'>Hear Our Harmony: Voices of Success</h2>

        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
             <div className="w-full max-w-6xl">
               <InfiniteMovingCards
                 items={musicSchoolTestimonails}
                 direction="right"
                speed="slow"
                pauseOnHover={true}
                />
            </div>
        </div>
    </div>
  )
}

export default  MusicSchoolTestmonials
