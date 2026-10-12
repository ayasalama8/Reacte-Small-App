export function Slicer(text : string , max : number=50){
   return text.length >= max ? text.slice(0,50) : text; 
}