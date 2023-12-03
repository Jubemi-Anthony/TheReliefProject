import React from 'react'

const Button = ({text,amount, number, setAmount}) => {
  return (
    <button className={number === amount ? 'matching' : ''} onClick={()=> setAmount(number)}>₦{text}</button>
  )
}

export default Button