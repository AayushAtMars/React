import { useState } from "react"


const links = [
    {
        item: 'Home',
        link: '/'
    },
    {
        item: 'Services',
        link: '/'
    },  
    {   
        item: 'About',
        link: '/'
    },
    {
        item: 'Contact',
        link: '/'
    }
]



const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
    <div className="flex items-center justify-between px-40 max-md:px-20 max-sm:px-10 bg-gray-100 py-4">
    <div className='nav'>
        <div className="logo text-2xl font-bold w-20 h-16 text-slate-600 flex items-center">LOGO</div>
    </div>

    <div className="links">
        <ul className='flex gap-10 justify-center items-center'>
            {
            links.map((link,index)=>{
                return(<li key={index} className='uppercasetext-lg font-bold max-md:hidden'>{link.item}</li>)
            })}
            <li className="block md:hidden border border-bla p-2 bg-slate-300"><button class="material-symbols-outlined" onClick={()=>{
                nav?setNav(false):setNav(true)
            }}>{nav?"close":"menu"}</button></li>
        </ul>
    </div>
    </div>
    <div>
    <ul className={` w-[60%] z-10 absolute bg-white py-10 right-0 gap-10 flex flex-col justify-center items-center ${nav?"block": "hidden"}`}>
            {
            links.map((link,index)=>{
                return(<li key={index} className='uppercasetext-lg font-bold'>{link.item}</li>)
            })}
        </ul>
    </div>
  </>
  )
}

export default Navbar
