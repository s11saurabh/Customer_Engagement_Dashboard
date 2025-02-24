import React,{useState} from 'react';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import axios from 'axios'
import   "../../styles/AuthStyles.css"
import { useNavigate,useLocation } from 'react-router-dom'; 
import { useAuth } from '../../context/auth';
const Login = () => {
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const handleSubmit=async (e)=>{
        e.preventDefault()
       try{
           const res=await axios.post(`/api/v1/auth/login`,{email,password});
           if (res&&res.data.success) {
            toast.success(res.data.message);
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token
            });
            localStorage.setItem('auth',JSON.stringify(res.data));
            navigate(location.state||"/");
        } else {
            toast.error(res.data.message);
        }
       }
       catch(error){
            console.log(error)
            toast.error("something went wrong")
       }
    }
  return (

      <Layout title='Register-Ecommerce App'>
      <div className="form-container">
   

   <form onSubmit={handleSubmit}>
  <h2>Login-Form</h2>


  
  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
   
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  
 <div className="mb-3"> <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot password</button> </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>

</div>

   </Layout>
    
 
  )
}

export default Login