import React from 'react'
import Navbar from '../components/Navbar'
import ResultComponent from '../components/ResultComponent'
import NameComponent from '../components/NameComponent'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <NameComponent name={"Hamza"} />
      <ResultComponent marks={90} subject={"Maths"} />
    </>
  )
}
