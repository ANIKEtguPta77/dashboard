import { useEffect, useState } from 'react';
import './index.css';
import jwt_decode from 'jwt-decode';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Schedules from './components/Schedules';
import Users from './components/Users';
import Settings from './components/Settings';
import Layout from './components/shared/Layout';



function App() {

  const [user, setuser] = useState({});


  function handlesignout(event) {
    setuser({});
    console.log(user)
  }

  function handleCall(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setuser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "827813005695-8i939h9cmg26vt48c9itqnaorjr43ife.apps.googleusercontent.com",
      callback: handleCall
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )

    google.accounts.id.prompt();
  }, [])

  return (

    <div>


      {Object.keys(user).length !== 0 ?
        <>
          
          <Routes>
            <Route path='login' element={<div>This is login</div>}>

            </Route>
            <Route path="/" element={<Layout handlesignout={handlesignout}/>} >
              <Route index element={<Dashboard />} />
              <Route path='transactions' element={<Transactions />} />
              <Route path='schedules' element={<Schedules />} />
              <Route path='users' element={<Users />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Routes>
        </>
        :
        <div className='flex flex-row'>
          <div className='h-screen w-1/2 bg-black'>
            <strong className='h-screen flex   items-center justify-center text-4xl  font-extrabold text-white '>Board.</strong>
          </div>
          <div className='h-screen flex  items-center justify-center bg-neutral-300 w-full'>
            <div className='flex flex-col justify-start gap-2'>
              <strong className='text-3xl font-extrabold'>Sign In</strong>
              <span>Sign in your account</span>
              <div className='rounded-lg' id="signInDiv" ></div>
              <div className='flex flex-col bg-white w-72 p-4 font-mono ... gap-4 rounded-lg'>
                <div>
                  <label for='email' className='text-sm font-medium'>Email address</label>
                  <input type='email' className="bg-neutral-100 h-8 w-full rounded" placeholder='......' name='email' />
                </div>
                <div>
                  <label for='password' className='text-sm font-medium'>Password   </label>
                  <input type='password' className="bg-neutral-100 h-8 w-full rounded" placeholder='Password ..' name='password' />

                </div>   
                <span className='text-xs text-blue-400'>Forgot password?</span>        
                <button className='bg-black text-white font-bold rounded-md h-10'>Sign In</button>   
                </div>
                <span className='text-sm ml-6'>
                  Don't have a account ?<span className='text-blue-400'>Register Here</span>
                </span>
            </div>
          </div>

        </div>

      }
    </div>



  )
}

export default App;
