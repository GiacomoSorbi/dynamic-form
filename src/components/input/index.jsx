import React from 'react'
import './Input.css'

const Input = ({ label, id, ...props }) => (
  <>
    {label && <label id={id}>{label}</label>}
    <input htmlFor={id} {...props} />
  </>
)

export default Input
