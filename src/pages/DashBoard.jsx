import React from 'react'
import profileImage from '../assets/profile.jpg'
function DashBoard() {
  return (
    <div style={{minHeight:"100vh", background:"linear-gradient(90deg, #0b0b0c 0%, #16446f 100%)"}} className='w-100 d-flex align-items-center '>
        <div className="container w-75">
           <div style={{background:"linear-gradient(90deg, #0b0b0c 0%, #16446f 100%)"}} className='card shadow'>
                <div  className="row p-5 d-flex align-center-center">
                    <div className="col-lg-6">
                        <img style={{width:"200px",height:"200px"}} src={profileImage} alt=""/>
                        
                    </div>
                    <div className="col-lg-6 text-center d-flex flex-column gap-2 p-4">
                        <h1  className='text-white '>0 $</h1>
                        <h5 className='text-white '>Account Balance</h5>
                        <h5 className='text-white '>Account No. : 123456789</h5>
                        <h5 className='text-white '>Account Type : Saving</h5>
                        <h5 className='text-white '>Account Status : Active</h5>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default DashBoard