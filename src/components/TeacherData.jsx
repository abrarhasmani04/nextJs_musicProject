"use client"
import React from 'react'

import {WavyBackground} from './ui/wavy-background'
import {AnimatedTooltip} from './ui/animated-tooltip'


const TeacherData = () => {
    const teachers = [
        {
          id: 1,
          name: "Aarav Sharma",
          designation: "Vocal Music Instructor",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        {
          id: 2,
          name: "Priya Mehta",
          designation: "Piano Instructor",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        },
        {
          id: 3,
          name: "Rahul Verma",
          designation: "Guitar Instructor",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
        },
        {
          id: 4,
          name: "Ananya Patel",
          designation: "Indian Classical Music Expert",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        },
        {
          id: 5,
          name: "Karan Singh",
          designation: "Music Production Mentor",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        },
        {
          id: 6,
          name: "Neha Kapoor",
          designation: "Violin Instructor",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        }
      ];


  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full' >
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-5'>Meet Our Instructors</h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>Discover the Talented professionals who will guide your musical journey</p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'> <AnimatedTooltip items={teachers} /></div>
       
      </WavyBackground>
    </div>
  )
}

export default TeacherData
