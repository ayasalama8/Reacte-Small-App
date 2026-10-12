import {  type ReactNode } from "react";

interface EProps{
children: ReactNode;
className?:string;
}

const Button = ({children , className , ...rest} : EProps) =>{
  return(
    <button className={`${className} p-2 w-full  rounded-md  text-white`}{...rest}>{children}</button>
  )
}
export default Button;