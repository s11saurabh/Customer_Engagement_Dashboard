import React,{useState} from 'react';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import axios from 'axios'
import   "../../styles/AuthStyles.css"
import { useNavigate} from 'react-router-dom'; 

const ForgotPassword = () => {
    const [email,setEmail]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [answer,setAnswer]=useState("")
   
    const navigate=useNavigate()
   
    const handleSubmit=async (e)=>{
        e.preventDefault()
       try{
           const res=await axios.post(`/api/v1/auth/forgot-password`,{email,newPassword,answer});
           if (res&&res.data.success) {
            toast.success(res.data.message);
         
            navigate("/login");
        } else {
            toast.error(res.data.message);
        }
       }
       catch(error){
            console.log(error)
            toast.error("something went wrong")
       }
    };


  return (
    <Layout title="forgot-password"> <div className="form-container">
   

    <form onSubmit={handleSubmit}>
   <h2>Reset Password</h2>
 
 
   
   <div className="mb-3">
     
     <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
   </div>
   <div className="mb-3">
     
     <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter your favourite sports name' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
   </div>
   <div className="mb-3">
    
     <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
   </div>
   
  
   <button type="submit" className="btn btn-primary">Reset</button>
 </form>
 
 </div>
 </Layout>
  )
}

export default ForgotPassword