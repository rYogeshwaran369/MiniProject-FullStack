import React from 'react'

export default function Home() {
  return (
    <div style={{width:'100%',height:'73vh',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>



        <div style={{width:'45%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'3em',flexDirection:'column'}}>

           
            <h1 style={{textAlign:'center', color:'rgba(236,236,241,var(--tw-text-opacity));',fontSize:'2.5em',fontFamily:'cursive',marginTop:'3em'}}>
                Automobile Insurence Portal
                </h1>
              

            <p style={{fontSize:'1.6em',color:'GrayText'}}>The purpose of insurance is to protect you from the consequences of risks you don't want to bear alone</p>


            <div style={{marginTop:'4em',marginLeft:'-3em',display:'flex',width:'14em',height:'2.4em',backgroundColor:'lightblue',borderRadius:'15px',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{fontFamily:'cursive'}}>Learn More</h4>
                </div>
        </div>




        <div style={{width:'55%',height:'100%',backgroundImage:'url("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689137718/poster-car-with-umbrella-it_901003-28673-removebg-preview_au4nsx.png")',backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>


        </div>

    </div>
  )
}
