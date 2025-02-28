import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const[val , setVal] = useState(0);
    const [name, setName] = useState('Aayush')

    // useEffect(()=>{
    //     console.log(`useEffect Called ${val}`)
    // })//Calls the function whenever the state chnages or the componenet re-renders

    // useEffect(()=>{
    //     console.log(`useEffect Called ${val}`)
    // },[val]) //calls the function whenever the mention state chnages

    useEffect(()=>{
        console.log(`useEffect Called ${val}`)
    },[]) //calls the function one time
  return (
    <>
    <div>
      <div className='max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center'>
        <h1 className="text-5xl font-bold text-center">Value: {val}</h1>
      </div>
      <div className="flex gap-x-7 items-center justify-around">
        <button className='bg-green-500 px-3 py-2 text-white font-medium' onClick={()=>setVal(val+1)}>Increment</button>
        <button className='bg-red-500 px-3 py-2 text-white font-medium' onClick={()=>setVal(val-1)}>Decrement</button>
      </div>
    </div>



    <div>
      <div className='max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center'>
        <h1 className="text-5xl font-bold text-center">Name: {name}</h1>
      </div>
      <div className="flex gap-x-7 items-center justify-around">
        <input type="text" className='p-3 border border-slate-600 bg-slate-100' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
    </div>
    </>
  )
}

export default UseEffect
