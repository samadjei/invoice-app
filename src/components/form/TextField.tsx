import React from 'react'

interface TextFieldProps {
  props: string,
  htmlFor: string,
  label: string, 
  type: string, 
  name: string, 
  value: string, 
  formStyle: string,
  formSize: string,
  className: string,
  placeholder: string
}

const STYLES = ['input--primary'];
const SIZES = ['input--large','input--medium','input--small' ];

const TextField: React.FC<TextFieldProps> = ({
  htmlFor,
  label,
  type,
  name,
  value,
  placeholder,
  formStyle,
  formSize }) => {

  // if the component has a form style, then i we want it to be whatever the button style we created and if it's not true, we set the value to the first style value in the array 
  const checkFormStyle = STYLES.includes(formStyle) ? formStyle : STYLES[0];

  const checkFormSize = SIZES.includes(formSize) ? formSize : SIZES[0];

  return (
    <div className='input__text-field'>
      <label className='body--medium input--label-text' htmlFor={htmlFor}>{label}</label>
      <input className={`input input--padding ${checkFormStyle} ${checkFormSize}`} type={type} name={name} value={value} placeholder={placeholder} />
    </div>
  )
}

export default TextField