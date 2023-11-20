import React from 'react'
import styles from "./Form.module.scss"

const Form = () => {
  return (
    <div className={`${styles.container} `}>
    <div className={`${styles.materialTextfield} relative`}>
      <input placeholder=" " type="text" className={`${styles.container} border-grey-500 border-2 focus:border-indigo-500`}/>
      <label className='absolute left-0 top-[50%] translate-y-[-50%] transition-all'>Label</label>
    </div>
  </div>
  )
}

export default Form