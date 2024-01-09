import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'


export default function Home() {
  return (
    <main className='m-auto justify-center align-middle py-20 px-10 flex-col'>
      <h2 className='text-center mx-auto font-bold text-[#0FC3D8] text-4xl mb-8'>Hello and welcome to our special corner of joy</h2>

      <div className="text-center mx-auto">
      <p className='mb-8 text-2xl'>We are thrilled to share a wonderful milestone with you. Your presence means the world to us, and we can't wait to share this exciting opportunity with you. Take a moment to explore, and when you're ready, kindly click on the button to proceed"</p>
      
      <Link href='/welcome'>
      <button className="text-center justify-center align-middle mx-auto bg-[#0FC3D8] hover:bg-[#EF577C] cursor-pointer text-2xl text-white py-2 px-4 flex font-semibold rounded-3xl items-center">Proceed
      <FaArrowRight size={30} className='text-white ml-3' />
      </button>
      </Link>
            
      </div>

      
    </main>
  )
}