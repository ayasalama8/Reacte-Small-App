import './App.css';
import Button from './components/Button'
import ProductCard from './components/ProductCard'
import {  formInputsList, productList } from './data'
import Modal from './Ui/Modal'
import { useState, type ChangeEvent } from 'react'
import type { IProduct } from './interfaces'
import { Input } from '@headlessui/react';

function App() {
 
 // state
 const defaultProductObj={ title:"",
  description: "",
  imageURL: "",
  price : "",
  colors:[],
  category:{
    name:"",
    imageURL:""   
  },}
 const [isOpen, setIsOpen] = useState(false);
 const [product , setProduct]=useState<IProduct>(defaultProductObj);
  // Handler
   function openModal() {
     setIsOpen(true)
   }
  
   function closeModal() {
     setIsOpen(false)
   }
   const onChangeHandler=(event :ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = event.target;

    setProduct({...product, [name] :value})
   }
   const submitHandler =(event:FormEvent<HTMLFormElement>):void=>{
    event.preventDefault()
    console.log(product);
    // throw new Error("Function Not emplemented")
   }
   const onCancel=()=>{
      console.log("cancel ");
      setProduct(defaultProductObj);
      closeModal();
   }

  //  Render
   const renderProductList = productList.map( product => <ProductCard key={product.id} product={product}/>);
   const renderFormInputs = formInputsList.map(input =>
  <div className='flex flex-col ' key={input.id}>
  <label htmlFor={input.id}>{input.label}</label>
  <Input type='text' id={input.id} name={input.name} className="mb-[1px] text-sm
   font-md text-gray-700" onChange={onChangeHandler} value={product[input.name]}/>
 </div>
  );

  return (
    <main className='container mx-auto'>
      <Button className='bg-indigo-700 hover:bg-indigo-800 w-full' onClick={openModal}> Add New</Button>
    <div className='grid  m-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md'>
      {renderProductList}
    
    </div>
    <Modal isOpen={isOpen} closeModal={close} title={"Add New Item"} >

      <form className='space-y-3' onSubmit={submitHandler}>
        {renderFormInputs}

      <div className="flex itmes-center space-x-3 ">
      <Button className='bg-indigo-700 hover:bg-indigo-800 w-full'>Submit</Button>
      <Button className='bg-gray-500 hover:bg-gray-500 w-full' onClick={onCancel}> Cancel</Button>
      </div>
      </form>
    </Modal>

    </main>
  )
}

export default App
