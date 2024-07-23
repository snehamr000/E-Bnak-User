import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { loginAPI, registerAPI } from '../services/allAPI';

function Auth({ insideRegister }) {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({ username: "", email: "", password: "", phoneNumber: "", address: "", accountNo: "" })
  const [validUserName, setValidUserName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validPhone, setValidPhone] = useState(false)
  const [validAddress, setValidAddress] = useState(false)
  const [validAccountNo, setValidAccountNo] = useState(false)




  // funtion for handling data from inputfileds && Validation
  const handleInputData = (e) => {
    const { name, value } = e.target
    // ---------Validation Username------------
    if (name == "username") {
      if (value.match(/^[a-zA-Z0-9]{5,15}$/) || "") {
        setValidUserName(false)
      } else {
        setValidUserName(true)
      }
    }

    // ---------Validation Email------------
    if (name == "email") {
      if (value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) || "") {
        setValidEmail(false)
      } else {
        setValidEmail(true)
      }
    }
    // ---------Validation Password------------
    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9]{3,9}$/) || "") {
        setValidPassword(false)
      } else {
        setValidPassword(true)
      }
    }


    // ---------Validation PhoneNumber------------
    if (name == "phoneNumber") {
      if (value.match(/^[0-9]{10}$/) || "") {
        setValidPhone(false)
      } else {
        setValidPhone(true)
      }
    }

    // ---------Validation Address------------
    if (name == "address") {
      if (value.match(/^[a-zA-Z0-9 ]{5,100}$/) || "") {
        setValidAddress(false)
      } else {
        setValidAddress(true)
      }
    }

    // ---------Validation AccountNo------------
    if (name == "accountNo") {
      if (value.match(/^[0-9]{11}$/) || "") {
        setValidAccountNo(false)
      } else {
        setValidAccountNo(true)
      }
    }
    setInputData({ ...inputData, [name]: value })
  }

  console.log(inputData);




  const handleRegister = async(e) =>{
    e.preventDefault()
    const {username,email,password,phoneNumber,address,accountNo} = inputData
    if(!username || !email || !password || !phoneNumber || !address || !accountNo){
      toast.info("Please fill the form completely...")
    }else{
      // api call
      try{
        const result = await registerAPI(inputData)
        // console.log(result.data);
        if(result.status==200){
          toast.success(`Welcome ${result.data.username}... Please Login to explore more!!!`)
          setInputData({username:"",email:"",password:"",phoneNumber:"",address:"",accountNo:""})
          setTimeout(()=>{
            navigate('/')
          },1800)
            
        }else{
          toast.warning(result.response.data)
          setTimeout(()=>{
            navigate('/')
          },1800)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
 const handleLogin = async(e) =>{
  e.preventDefault()
  const {email,password,accountNo} = inputData
  if(!email || !password || !accountNo){
    toast.info("Please fill the form completely...")
  }else{
    try{
      const result = await loginAPI(inputData)
      if(result.status==200){
        toast.success(`Welcome ${result.data.username}...`)
        setTimeout(()=>{
          navigate('/dashboard')
        },1800)
      }else{
        toast.warning(result.response.data)
        setTimeout(()=>{
          navigate('/')
        },1800)
      }
    }catch(err){
      console.log(err);
    }
  }
 }

  return (
    <div className='w-100  py-5  d-flex justify-content-center align-items-center'>
      <div className="container w-75 py-5">
        <div className="card  shadow">
          <div  className="row d-flex align-items-center p-5">
            <div className="col-lg-5 col-md-5 rounded">
              <img className='w-100 img-fluid' src="https://img.freepik.com/premium-vector/get-glimpse-account-opening-flat-illustration_203633-7948.jpg?w=740" alt="" />
            </div>
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-6 col-md-5">
              <Form>
                <h3 className='fw-bolder text-black text-center py-2'>
                  {insideRegister ? "SignUp" : "Sign In "}
                </h3>
                {insideRegister &&
                  <FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3" >
                    <Form.Control type="text" name='username' value={inputData.username} onChange={handleInputData} placeholder="Username" />
                    {validUserName && <p className='text-danger fw-bolder mt-2'>Invalid Username</p>}
                  </FloatingLabel>
                }
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                  <Form.Control type="email" name='email' value={inputData.email} onChange={handleInputData} placeholder="name@example.com" />
                </FloatingLabel>
                {validEmail && <p className='text-danger fw-bolder mt-2'>Invalid Email Address</p>}
                                
                <FloatingLabel controlId="floatingInputAccountNo" label="Account Number" className="mb-3" >
                    <Form.Control type="number" name='accountNo' value={inputData.accountNo} onChange={handleInputData} placeholder="Account Number" />
                  </FloatingLabel>
                {validAccountNo && <p className='text-danger fw-bolder mt-2'>Invalid Account Number</p>}


                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                  <Form.Control type="password" name='password' value={inputData.password} onChange={handleInputData} placeholder="Password" />
                </FloatingLabel>
                {validPassword && <p className='text-danger fw-bolder mt-2'>Invalid Password</p>}

                {
                  insideRegister &&
                  <FloatingLabel controlId="floatingInputPhone" label="Phone Number" className="mb-3" >
                    <Form.Control type="number" name='phoneNumber' value={inputData.phoneNumber}
                      onChange={handleInputData} placeholder="Phone Number" />
                  </FloatingLabel>
                }
                {validPhone && <p className='text-danger fw-bolder mt-2'>Invalid PhoneNumber</p>}

                {
                  insideRegister &&
                  <FloatingLabel controlId="floatingInputAddress" label="Address" className="mb-3" >
                    <Form.Control type="text" name='address' value={inputData.address} onChange={handleInputData} placeholder="Address" />
                  </FloatingLabel>
                }
                {validAddress && <p className='text-danger fw-bolder mt-2'>Invalid Address</p>}

                <div className="mb-3">
                  {insideRegister ?
                    <div className='mt-3 d-grid'>
                      <button onClick={handleRegister} style={{ backgroundColor: 'black' }} className="btn text-white  px-4">SIGN UP</button>
                    </div>
                    :
                    <div className='mt-3 d-grid'>
                      <button onClick={handleLogin} style={{ backgroundColor: 'black' }} className="btn text-white  px-4">SIGN IN</button>
                    </div>
                  }
                </div>
                <div>
                  {insideRegister ?
                    <p className='text-dark mt-3'>Already have an Account? Click here to <Link className='text-primary' to={'/'}>Login</Link></p> :
                    <p className='text-dark mt-3'>New User? Click here to <Link className='text-primary' to={'/register'}>Register</Link></p>}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme='dark' autoClose={1800} />
    </div>
  )
}

export default Auth