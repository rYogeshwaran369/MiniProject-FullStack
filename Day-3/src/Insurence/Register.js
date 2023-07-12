// import React, { useState } from 'react';
// import { Link, useNavigate} from 'react-router-dom';


// export default function Register() {

//   const navigate = useNavigate();

//     const [username,setUsername] = useState('');
//     const [Vehno,setVehno] = useState('');
//     const [email,setEmail] = useState('');
//     const [phone,setPhone] = useState('');
//     const [addr,setAddr] = useState('');
//     const [files,setFiles] = useState('');

//     const [alname,setAlname] = useState('');
//     const [alveh,setalveh] = useState('');
//     const [alemail,setalemail] = useState('');
//     const [alphone,setalphone] = useState('');
//     const [aladdr,setAladdr] = useState('');
//     const [alfiles,setalfiles] = useState('');

//     const handleValidation = () => {
//       if(!files)
//       {
//         setalfiles("please choose the file")
//       }
//       else
//       {
//         setalfiles('')
//       }
//       if(!addr)
//       {
//         setAladdr('Please enter the Address')
//       }
//       else
//       {
//         setAladdr('')
//       }
//         if (!username) {
//             setAlname('Please Enter the User Name!')
//         }
//         else{
//             setAlname('')
//         }
//         if (!Vehno) {
//             setalveh('Please Enter the Vehicle Number!')
//         }
//         else
//         {
//             setalveh('')
//         }
//        if (!email) {
//           setalemail('Please Enter the Email Id!')
//         }
//       else
//       {
//           setalemail('')
//       }
//       if (!phone) {
//         setalphone('Please Enter the Phone Number!')
//       }
//     else
//     {
//         setalphone('')
//     }
//       if(Vehno && username && email && phone)
//         {
//             alert("Registration Sucessfull")
//             navigate('/')
//             setUsername('');
//             setEmail('')
//             setPhone('')
//             setVehno('')
//             setAddr('')
//         }
       
//       };
  

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100%', alignItems: 'center', backgroundColor: 'whitesmoke' }}>

//         <h1>Register Your Insurance</h1>

//         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100vw', }}>
         
         
         
//           <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'center',alignItems:'center'}}>
//             <input value={username}
//             onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5 }} />
//             <span style={{color:'red'}}>{alname}</span>
           
//             <input value={Vehno} onChange={(e) =>setVehno(e.target.value) }  placeholder='Enter Vehicle No' style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }} />
//             <span style={{color:'red'}}>{alveh}</span>
            
//             <input value={email} onChange={(e) =>setEmail(e.target.value) }
//               placeholder='Enter Email Id'
//               style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}
//             />

//           <span style={{color:'red'}}>{alemail}</span>

//             <input value={phone} onChange={(e) =>setPhone(e.target.value) }
//              placeholder='Enter Phone Number' style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}/>
//             <span style={{color:'red'}}>{alphone}</span>

//             <textarea value={addr} onChange={(e) =>setAddr(e.target.value) }
//              placeholder='Enter Address' style={{ width: '25em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/>
//             <span style={{color:'red'}}>{aladdr}</span>

//             {/* <span style={{color:'red'}}>{alfiles}</span> */}

//           </div>

//           <div>
//             <select style={{ width: '21.3em', fontSize: '1em', padding: '0.7em', margin: '1em' }}>
//               <option>Select the Model</option>
//               <option>Two Wheeler</option>
//               <option>Four Wheeler</option>
//             </select>
//             <label style={{color:'white',marginLeft:'1em'}}>License Proof</label>
//             <input type='file'  placeholder='License' style={{color:'black', width: '30em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/>

//           </div>
         
         
         
//           </div>

//          <button onClick={handleValidation} type='submit' style={{ width: '15em', padding: '0.6em', backgroundColor: 'black', borderRadius: 10, fontStyle: 'italic', fontSize: '1em', marginTop: '2em' }}>Register</button>
       
//         <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5em', marginTop: '0.6em' }}>
//           <span style={{ color: 'gray' }}>Already have an Account? </span>
//           <Link to='/' ><span style={{ color: 'black', marginLeft: '1em' }}>Sign in</span></Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const SignupPage = () => {
  const [username, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [vehicle, setvehicle] = useState('');
  const [licence, setlicence] = useState('');
  

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setphone(e.target.value);
  };
  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };
  const handleLicenceChange = (e) => {
    setlicence(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to create a new user
    console.log('Username:', username);
    console.log('phone no:', phone);
    console.log('Email:', email);
    console.log('Vehicle:', vehicle);
    console.log('Licence:', licence);
    // Reset form fields
    setname('');
    setphone('');
    setEmail('');
    setvehicle('');
    setlicence('');
  };

  return (
    <div className='back' style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:-50,paddingTop:-100}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40,marginLeft:-1000,width:'20vw',height:'40vw',overflowY:'scroll'}}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label >User Name:</label>
        <input
        type="text"
        onChange={handleNameChange}
        placeholder='enter your name'
        required
        />
        <label>Mobile No:</label>
        <input
          type="number"
          pattern="[0-9]*"
          value={phone}
          onChange={handlePhoneChange}
          placeholder='enter your phone number'
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='enter your Email'
          value={email}
          onChange={handleEmailChange}
          required
        />
        
        <label>Vehicle No:</label>
        <input
          
          value={vehicle}
          placeholder='enter your vehicle number'
          onChange={handleVehicleChange}
          required
        />

        <label>Licence No:</label>
        <input
        
        
          value={licence}
          placeholder='enter your licence number'
          onChange={handleLicenceChange}
          required
        />
        <br></br>
        <label>Vehicle Type:
          <br></br>
            <select>
           
            <option>Two Wheeler</option>
            <option>Four Wheeler</option>
            </select>
        </label>
        <br></br>
        <label>Vehicle Model:</label>
        <input
        placeholder='enter vehicle model'
        type="text"
        
        />
        <label>Licence proof:</label>
        
        <input
        placeholder='enter vehicle model'
        type="file"
        
        />
        <button type="submit">Sign Up</button>

        <h4>Already User?<Link to='/'>Sign in</Link></h4>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
