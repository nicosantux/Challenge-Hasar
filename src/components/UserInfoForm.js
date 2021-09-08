import React from 'react'
import { DatePicker } from '@material-ui/pickers'

import { useUser } from '../hooks/useUser'
import { InputContainer, Form, Label, Inputs } from '../elements/form'

const UserInfoForm = ({ date, setDate }) => {
  const { userInfo, setUserInfo } = useUser()

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  return (
    <Form autoComplete="off">
      <InputContainer>
        <Inputs
          id="name"
          name="name"
          placeholder=" "
          type="text"
          value={userInfo.name}
          onChange={handleChange}
        />
        <Label htmlFor="name">Nombre</Label>
      </InputContainer>
      <InputContainer>
        <Inputs
          id="email"
          name="email"
          placeholder=" "
          type="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
      </InputContainer>
      <InputContainer>
        <DatePicker value={date} onChange={setDate} />
      </InputContainer>
    </Form>
  )
}

export default UserInfoForm
