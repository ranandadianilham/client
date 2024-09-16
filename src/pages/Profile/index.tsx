import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
interface iProfile {
  id?: number
  name: string
  email: string
  role: string
}
const ProfilePage = () => {
  const [profileData, setProfile] = useState<iProfile>({
    id: 123,
    name: "Budiman",
    email: "em@mail.com",
    role: "staff"
  });


  

  return (
    <DefaultLayout>
        <div>
          <p className='text-xl'>Profile</p>
          <div className='flex flex-col'>
            <div className='flex gap-3'>
              <p className='font-semibold'>Name:</p>
              <p className='font-bold'>{profileData?.name}</p>
            </div>
            <div className='flex gap-3'>
              <p className='font-semibold'>Name:</p>
              <p className='font-bold'>{profileData?.email}</p>
            </div>
            <div className='flex gap-3'>
              <p className='font-semibold'>Role:</p>
              <p className='font-bold'>{profileData?.role}</p>
            </div>
            
          </div>
        </div>
    </DefaultLayout>
  )
}

export default ProfilePage