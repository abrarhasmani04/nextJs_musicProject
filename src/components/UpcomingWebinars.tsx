"use client"
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";
 

function UpcomingWebinars() {

    const featuredWebinars  = [
        {
          id: 1,
          title: "Introduction to Indian Classical Music",
          description: "Learn the fundamentals of ragas, talas, and the rich heritage of Indian classical music.",
          link: "/webinars/indian-classical-music"
        },
        {
          id: 2,
          title: "Mastering Vocal Techniques",
          description: "Improve your singing with breathing exercises, pitch control, and voice modulation.",
          link: "/webinars/mastering-vocal-techniques"
        },
        {
          id: 3,
          title: "Guitar Essentials for Beginners",
          description: "A complete beginner's guide to chords, strumming patterns, and playing your first songs.",
          link: "/webinars/guitar-essentials"
        },
        {
          id: 4,
          title: "Music Production with Digital Tools",
          description: "Explore modern music production techniques using popular DAWs and plugins.",
          link: "/webinars/music-production"
        },
        {
          id: 5,
          title: "The Art of Songwriting",
          description: "Discover how to write memorable melodies, lyrics, and song structures.",
          link: "/webinars/songwriting"
        },
        {
          id: 6,
          title: "Piano Performance Workshop",
          description: "Enhance your piano skills through practical exercises and performance techniques.",
          link: "/webinars/piano-performance"
        }
      ];

  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your music journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={featuredWebinars}/>
            </div>
            <div className='mt-10 text-center'>
                <Link className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200' href={"/"}>
                    view all Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars
