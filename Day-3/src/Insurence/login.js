// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//     const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [vehno, setVehno] = useState('');
//   const [alname,setAlname] = useState('');
//   const [alveh,setVeh] = useState('');

//     const handleSubmit = ()=>{
//         alert("Form Submitted Successfully")
//         setUsername('');
//         setVehno('');
//     }

//   const handleValidation = () => {
//     if (!username) {
//         setAlname('Please Enter the User Name!')
//     }
//     else{
//         setAlname('')
//     }
//     if (!vehno) {
//       setVeh('Please Enter the Vehicle Number!')
//     }
//     else
//     {
//         setVeh('')
//     }
//     if(vehno && username)
//     {
//         navigate('./home')
//     }
//   };


//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', alignItems: 'center', backgroundColor: '#1e2125' }}>
//         <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%', marginTop: '2em' }}>
//           <img style={{ width: '4em', marginLeft: '2em' }} src='https://cdn-icons-png.flaticon.com/512/2209/2209673.png' alt='Logo' />
//           <span style={{ color: '#e9dfce', textDecoration: 'underline', fontStyle: 'italic', marginLeft: '2em', marginRight: '2em', fontSize: '2em' }}>AIP</span>
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', marginTop: '-7em' }}>
//           <h1 style={{ color: '#e9dfce', fontStyle: 'italic', fontSize: '3em', marginBottom: '1.5em' }}>Login Page</h1>
         
//           <input 
//             required
//             id='un'
//             placeholder='User Name ex: xyz'
//             style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5 }}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <span style={{color:'red',textAlign:'left'}}>{alname}</span>
         
//           <input
//             id='vn'
//             placeholder='Vehicle No ex: xyz'
//             style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}
//             required
//             value={vehno}
//             onChange={(e) => setVehno(e.target.value)}
//           />

//           <span style={{color:'red',textAlign:'left'}}>{alveh}</span>

//           <button onClick={handleValidation} type='submit' style={{ width: '15em', padding: '0.6em', marginTop: '3em', backgroundColor: '#e9dfce', borderRadius: 10, fontStyle: 'italic', fontSize: '1em' }}>Login</button>
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1em' }}>
//           <span style={{ color: 'gray' }}>Don't have an Account? </span>
//           <Link to="/register"><span style={{ color: '#e9dfce', marginLeft: '1em' }}>Sign up</span></Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Topnav from '../Components/Topnav';
// import Home from './Navbar';

const LoginPage = () => {
  const [name, setname] = useState('');
  const [vehicle, setvehicle] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, such as making an API call to authenticate the user
    console.log('Name:', name);
    console.log('Vehicle:', vehicle);
    // Reset form fields
    setname('');
    setvehicle('');
  };

  return (
    <>
    <div className='back' style={{width:'100vw',height:'115vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-60,paddingRight:90}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:60,marginLeft:-1000,width:'20vw'}}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">User Name:</label>
        <input
          
          placeholder='enter your username'
          value={name}
          onChange={handleNameChange}
          required
        />
        <br></br>
        <label>Vehicle No:</label>
        <input
          
          placeholder='enter your vehicle no'
          value={vehicle}
          onChange={handleVehicleChange}
          required
        />
        <br></br>
        <button type="submit"><Link to='Home'>Sign in</Link></button>
      </form>
      <h4>new user?<Link to="Register">signup</Link></h4>
      
    </div>
    </div>
    </>
  );
};

export default LoginPage;

