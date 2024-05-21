import React from 'react'

const Button = ({ styles },{handle}) => (
  <button onClick={handle} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient-zero rounded-[10px] outline-none ${styles}`}>
    Get Your Version
  </button>
)

export default Button