import './App.css'
import Button from './components/Button'
import ProductCard from './components/ProductCard'
import { productList } from './data'
import Modal from './Ui/Modal'
import { useState } from 'react'

function App() {
 const renderProductList = productList.map( product => <ProductCard key={product.id} product={product}/>)
  // state

 const [isOpen, setIsOpen] = useState(false);

  // Handler
   function openModal() {
     setIsOpen(true)
   }
  
   function closeModal() {
     setIsOpen(false)
   }
  return (
    <main className='container mx-auto'>
      <Button className='bg-indigo-700 hover:bg-indigo-800 w-full' onClick={openModal}> Add New</Button>
    <div className='grid  m-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md'>
      {renderProductList}
    
    </div>
    <Modal isOpen={isOpen} closeModal={close} title={"Add New Item"} >
      <div className="flex itmes-center space-x-3">
      <Button className='bg-indigo-700 hover:bg-indigo-800 w-full'>Submit</Button>
      <Button className='bg-gray-500 hover:bg-gray-400 w-full' onClick={closeModal}> Cancel</Button>
      </div>
    </Modal>

    </main>
  )
}

export default App
