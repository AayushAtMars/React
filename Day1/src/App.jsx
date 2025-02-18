import React from 'react'
import './App.css'
import ContractCard from './component/globals/ContractCard'
import InvoiceStatus from './component/globals/InvoiceStatus'

const data = [
  {
  name: "Esther Howard",
  desig: "Forward Response Developer",
  role: "Admin",
  img: 'https://randomuser.me/api/portraits/women/1.jpg'
},
{
  name: "Harry Potter",
  desig: "Aabra Kadabra",
  role: "Baxodi",
  img: 'https://static.wikia.nocookie.net/harrypotter/images/c/ce/Harry_Potter_DHF1.jpg'
},
{
  name: "Smol Billi",
  desig: "Mahan",
  role: "meow",
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHJL4y6E0Ps6voeKXWnbQzNUEknoXGQCwuA&s'
}
];

const invoiceData = [
  {
    date: "December 13, 2022",
    companyName: "Tuple",
    CompanyLogo: "anchor",
    amount: "$2,000.00",
    status: "Overdue"
  },
  {
    date: "March 27, 2005",
    companyName: "Meoww",
    CompanyLogo: "pets",
    amount: "$9,000.00",
    status: "Paid"
  },
  {
    date: "August 31, 2005",
    companyName: "Mahan",
    CompanyLogo: "crown",
    amount: "$69,000.00",
    status: "Pending"
  },
];
const App = () => {
  return (
    <>
    <div className='container w-[80%] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-10'>
      {data.map((person,index)=>(
        <ContractCard key={index} name={person.name} desig={person.desig} role={person.role} img={person.img}  />
      ))}
    </div>
    
    <div className='container w-[80%] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-10'>
    {invoiceData.map((invoice, index) => (
          <InvoiceStatus key={index} {...invoice} />
        ))}
    </div>
    </>
    
  );
};

export default App
