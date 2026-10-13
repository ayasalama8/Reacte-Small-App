import type { InputHTMLAttributes } from "react";

interface EProps extends InputHTMLAttributes<HTMLInputElement>{}

const input = ({...rest} : EProps) =>{
  return(
 <input type="text"  className='border-2 border-gray-300 shadow-md
 focus:border-indigo-500 focus:outline-none focus:ring-1
 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md'{...rest} />
  )
}
export default input;