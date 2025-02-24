import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminMenu = () => {





  return (
    
    <>



    
    <div className='text-center'>

    <div className="list-group">
  <h4>Admin Panel</h4>

  <img
        src="/images/contact.jpeg"
        className="banner-img"
        alt="bannerimage"
        height="20%"
        width="100%"
        style={{  objectFit: "cover" }}
      />

  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/dashboard/admin/product" className="list-group-item list-group-item-action">Products</NavLink>
  <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">Orders</NavLink>
  <NavLink to="/dashboard/admin/create-users" className="list-group-item list-group-item-action">Users</NavLink>
</div>
    </div>
    </>
  )
}

export default AdminMenu