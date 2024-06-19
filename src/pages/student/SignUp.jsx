import { FormControl, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignUp = () => {
    const [signupDetails, setSignupDetails] = useState({
        firstname: "",
        lastname: "",
    })
  return (
    // MUI Sign up form
    <FormControl>
                <FormControl>
            <TextField
                label="First Name"
                variant="outlined"
                value={signupDetails.firstname}
                onChange={(e) => setSignupDetails({ ...signupDetails, firstname: e.target.value })}
            />
            <TextField
                label="Last Name"
                variant="outlined"
                value={signupDetails.lastname}
                onChange={(e) => setSignupDetails({ ...signupDetails, lastname: e.target.value })}
            />
        </FormControl>
    </FormControl>
  )
}
export default SignUp