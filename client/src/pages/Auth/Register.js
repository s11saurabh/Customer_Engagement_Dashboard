import React,{useState} from 'react';
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';
import axios from 'axios'
import   "../../styles/AuthStyles.css"
import { useNavigate } from 'react-router-dom'; 
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAdress]=useState("")
    const [answer,setAnswer] =useState("");
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
       try{
           const res=await axios.post(`/api/v1/auth/register`,{name,email,password,phone,address,answer});
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
    }
  return (

      <Layout title='Register-Ecommerce App'>
      <div className="form-container">
   

   <form onSubmit={handleSubmit}>
  <h2>Register</h2>


  <div className="mb-3">
   
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
   
  </div>
  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
   
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPhone1" placeholder='Enter your mobile number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
  </div>
  <div className="mb-3">
   
    <input type="text" className="form-control" id="exampleInputadddress1" placeholder='Enetr your address' value={address} onChange={(e)=>setAdress(e.target.value)}/>
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPhone1" placeholder='what is your favourite sports' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>

   </Layout>
    
 
  )
}

export default Register