import React from 'react'
import { Link } from 'react-router-dom'

export default function Topnav() {
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:'2em',paddingRight:'2em'}}>
            <div>
                <img src='https://cdn-icons-png.flaticon.com/512/4412/4412561.png' style={{width:'4em',marginTop:'1em',height:'4em'}}/>
            </div>


            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'50%',marginTop:'1em'}}>

            <div>
            <Link style={{textDecoration:'none'}}  to='/'> <h3 style={{fontFamily:'cursive',fontWeight:'lighter',color:'GrayText'}}>Home</h3></Link>
            </div>

            <div>
        <Link style={{textDecoration:'none'}} to='/explore'> <h3 style={{fontFamily:'cursive',fontWeight:'lighter',color:'GrayText'}}>Explore</h3></Link>
            </div>

            <div>
           <Link style={{textDecoration:'none'}} to='/renew'> <h3 style={{fontFamily:'cursive',fontWeight:'lighter',color:'GrayText'}}>Renew</h3></Link>
            </div>

            <div>
           <Link style={{textDecoration:'none'}} to='/claim'><h3 style={{fontFamily:'cursive',fontWeight:'lighter',color:'GrayText'}}>Claim</h3></Link>
            </div>

            <div>
            <Link style={{textDecoration:'none'}} to='/help'><h3 style={{fontFamily:'cursive',fontWeight:'lighter',color:'GrayText'}}>Help!</h3></Link>
            </div>

            </div>


        </div>
    </div>
  )
}
