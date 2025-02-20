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
            <li className="block md:hidden border border-black flex p-2 bg-slate-300"><span class="material-symbols-outlined">menu</span></li>
        </ul>
    </div>
    </div>
  </>
  )
}

export default Navbar
