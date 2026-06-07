"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {

    const Musiccontent = [
        {
          title: "Unlock Your Musical Potential",
          description: "Welcome to our Music Academy, where passion meets performance. We offer expert training in vocals, guitar, piano, drums, violin, and music theory for students of all ages. Learn from experienced instructors in a creative and inspiring environment."
        },
        {
          title: "Learn Music, Create Memories",
          description: "Our academy helps students discover the joy of music through personalized lessons and hands-on practice. Whether you're a beginner or an advanced musician, we provide the guidance needed to achieve your goals."
        },
        {
         title: "Where Talent Meets Excellence",
          description: "Develop your musical skills with professional training programs designed for all age groups. From classical foundations to modern performance techniques, our academy nurtures confidence, creativity, and artistic growth."
        },
        {
          title: "Start Your Musical Journey Today",
          description: "Explore the world of music with expert-led classes in singing, piano, guitar, drums, and more. Our supportive learning environment encourages students to express themselves and build lifelong musical skills."
        },
        {
          title: "Inspiring the Next Generation of Musicians",
          description: "At our Music Academy, students receive high-quality education, performance opportunities, and personalized mentorship. We are committed to helping every learner reach their full musical potential."
        },

        {
            title: "Master the Art of Music",
            description: "Build strong musical foundations through professional training in vocals and instruments. Our academy provides a supportive environment where students can grow their talent and confidence."
          },
          {
            title: "Discover Your Musical Voice",
            description: "Whether you dream of singing on stage or playing your favorite instrument, our expert instructors help you develop skills, technique, and creativity at every level."
          },
          {
            title: "Music Education for Every Age",
            description: "From young beginners to adult learners, our academy offers customized lessons that make learning music enjoyable, engaging, and rewarding."
          },
          {
            title: "Transform Passion Into Performance",
            description: "Learn from experienced musicians, participate in live performances, and gain the confidence to showcase your talent in front of an audience."
          },
          {
            title: "A Creative Space for Musicians",
            description: "Our academy encourages artistic expression through interactive lessons, collaborative learning, and hands-on musical experiences."
          },
          {
            title: "Learn, Practice, Perform",
            description: "Develop technical skills, musical understanding, and stage presence through structured programs designed to help students excel."
          },
          {
            title: "Your Journey to Musical Excellence",
            description: "Achieve your musical goals with personalized instruction, modern teaching methods, and a curriculum tailored to your learning style."
          },
          {
            title: "Experience the Joy of Music",
            description: "Music has the power to inspire and connect people. Our academy helps students unlock their creativity while mastering their chosen instrument or vocal style."
          },
          {
            title: "Professional Guidance, Lasting Skills",
            description: "Receive expert mentorship from dedicated instructors who are passionate about helping students succeed in their musical journey."
          },
          {
            title: "Building Future Musicians",
            description: "Through quality education, performance opportunities, and continuous support, we help students develop the skills needed for a lifelong love of music."
          }
        
      ]
  return (
    <div>
      <StickyScroll content={Musiccontent}/>
    </div>
  )
}

export default WhyChooseUs
