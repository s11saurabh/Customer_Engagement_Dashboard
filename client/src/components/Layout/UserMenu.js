import React from 'react'
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
  return (
    <div>
    <div className='text-center'>
    <div className="list-group">
        <h3>Dashboard</h3>





        <img
        src="/images/contact.jpeg"
        className="banner-img"
        alt="bannerimage"
        height="20%"
        width="100%"
        style={{  objectFit: "cover" }}
      />
  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
  <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
  
</div>
    </div>
    </div>
  )
}

export default UserMenu