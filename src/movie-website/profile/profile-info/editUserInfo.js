import React from 'react'
import { useState } from 'react';

import { updateUserThunk } from '../../services/auth-thunks';

const EditUserInfo = ({profile, setProfile}) => {
  console.log("In edit user info, profile is " + JSON.stringify(profile))
  console.log("Profile first name is" + profile.firstname)

  const [email, setEmail] = useState(profile.email)
  const [firstname, setFirstname] = useState(profile.firstname)
  const [lastname, setLastname] = useState(profile.lastname)

  console.log("Profile first name is" + firstname)

  return(
    <>
      <br />
      <h5>{profile.email}</h5>
      <br />
      <label className="pe-2" for="firstNameEdit">
        First Name
      </label>
      <input
        id="firstNameEdit"
        type="text"
        value={firstname}
        className="form-control w-75"
        onChange={(e) =>{
          setFirstname(e.target.value)
          setProfile({ ...profile, firstname })
        }}
      />
      <br />
      <label className="pe-2 mb-2" for="lastNameEdit">
        Last Name
      </label>
      <input
        id="lastNameEdit"
        type="text"
        value={lastname}
        className="form-control w-75"
        onChange={(e) => {
          setLastname(e.target.value)
          setProfile({ ...profile, lastname })
        }
        }
      />
      <br />
      <label className="pe-2 mb-2" for="emailEdit">
        Email
      </label>
      <input
        id="emailEdit"
        type="text"
        value={email}
        className="form-control w-75"
        onChange={(e) =>{
          setEmail(e.target.value)
          setProfile({ ...profile, email })
        }
        }
    />
    </>
  )
};
export default EditUserInfo;