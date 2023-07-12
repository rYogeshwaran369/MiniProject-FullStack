import React from 'react'
import InsurenceCard from '../Components/InsurenceCard'

export default function Explore() {
  return (
    <div>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'2em',marginTop:'7%'}}>
        <InsurenceCard name="Bike Insurence" img="https://img.freepik.com/free-photo/red-motorcycle-with-number-17-it_1340-23185.jpg?t=st=1689146379~exp=1689149979~hmac=84ceb4304573870ad09c6b5865966a6d58d3f2155066bdabf2b12fa7c704b2a7&w=1380"/>
        <InsurenceCard name="Car Insurence"/>
        <InsurenceCard/>
    </div>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'2em',marginTop:'7%'}}>
        <InsurenceCard/>
        <InsurenceCard/>
        <InsurenceCard/>
    </div>

    </div>
  )
}
