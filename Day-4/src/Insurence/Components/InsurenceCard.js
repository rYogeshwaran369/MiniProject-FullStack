import React, { Component } from 'react'

export default class InsurenceCard extends Component {
  render() {
    return (
        <div style={{width:'30%',height:'25em',borderColor:'red',border:'1px solid black',borderRadius:'10px'}}>

        <div style={{width:'100%',height:'56%',borderTopRightRadius:'10px',borderTopLeftRadius:'10px',backgroundImage:'url("https://img.freepik.com/free-photo/red-motorcycle-with-number-17-it_1340-23185.jpg?t=st=1689146379~exp=1689149979~hmac=84ceb4304573870ad09c6b5865966a6d58d3f2155066bdabf2b12fa7c704b2a7&w=1380")',backgroundSize:'cover',display:'flex'}}>
        </div>

        <div>
            <h3 style={{fontFamily:'cursive',textAlign:'center',color:'#494F55'}}>{this.props.name}</h3>
            

            <div style={{textAlign:'center',justifyContent:'center'}}>
            <span style={{paddingLeft:'1em',color:'gray'}}>Four wheels move the body, but two wheels move the soul. Protect that soul with bike insurance</span>
            </div>

           
                <h4 style={{fontFamily:'cursive',textAlign:'center'}}>Learn More</h4>

        </div>
       
    </div>
    )
  }
}

