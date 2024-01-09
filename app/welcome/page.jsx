import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'


export default function Home() {
  return (
    <main className='m-auto justify-center align-middle py-20 px-10 flex-col'>
      <h2 className='text-center mx-auto font-bold text-[#0FC3D8] text-4xl mb-8'>Thanks for taking this chance!</h2>

      <div className="text-center mx-auto">
      <p className='mb-8 text-2xl'>Kindly enter your name to proceed</p>
      
      <form className="flex items-center mx-auto mt-8 p-6 w-full md:w-1/3 relative">
        <input
          type="text"
          placeholder="Enter Name..."
          className="w-full py-2 px-4 rounded-3xl border border-gray-300 focus:outline-none focus:border-[#0FC3D8] "
        />
        <button
          type="submit"
          className="bg-[#0FC3D8] hover:bg-[#EF577C] cursor-pointer text-white py-2.5 px-4 rounded-3xl absolute left-[79%]"
        >
          Submit
        </button>
      </form>
  
      
     
            
      </div>

      
    </main>
  )
}