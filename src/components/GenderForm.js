import React from 'react'

import male from '../img/gen-1.png'
import nonBinary from '../img/gen-2.png'
import female from '../img/gen-3.png'
import { GenderContainer, Gender, InputRadio } from '../elements/form'
import { useUser } from '../hooks/useUser'

const GenderForm = () => {
  const { userInfo, setUserInfo } = useUser()

  const handleSelectedOption = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  return (
    <GenderContainer>
      <div>
        <label htmlFor="male">
          <Gender alt="male" src={male} />
        </label>
        <InputRadio
          id="male"
          name="gender"
          type="radio"
          value="Male"
          onChange={handleSelectedOption}
        />
      </div>
      <div>
        <label htmlFor="non-binary">
          <Gender alt="non-binary" src={nonBinary} />
        </label>
        <InputRadio
          id="non-binary"
          name="gender"
          type="radio"
          value="Non binary"
          onChange={handleSelectedOption}
        />
      </div>
      <div>
        <label htmlFor="female">
          <Gender alt="female" src={female} />
        </label>
        <InputRadio
          id="female"
          name="gender"
          type="radio"
          value="Female"
          onChange={handleSelectedOption}
        />
      </div>
    </GenderContainer>
  )
}

export default GenderForm
