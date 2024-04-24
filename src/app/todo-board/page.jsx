import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

const todoboard = () => {
  return (
    <div className='h-screen grid grid-cols-12'>
    <div className='col-span-2'>
      <SidebarComponent/>
    </div>
    <div className='col-span-10'>
      <NavbarComponent/>
      <h1>nothing</h1>
    </div>
</div>
  )
}

export default todoboard
