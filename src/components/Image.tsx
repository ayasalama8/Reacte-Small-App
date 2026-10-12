interface EProps{
imageURL: string;
alt : string;
className:string;
}

const Image = ({imageURL , alt , className} : EProps) =>{
  return(
    <img src={imageURL} alt={alt} className={className} />
  )
}
export default Image;