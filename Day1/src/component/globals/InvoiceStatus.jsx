import React from "react";

const InvoiceStatus = ({date, companyName, CompanyLogo, amount, status}) => {
  return (
    <div className="card border border-slate-200 rounded-xl drop-shadow-2xl">
      <div className="top flex items-center justify-between px-8 rounded-xl py-6 bg-gray-200">
        <div className="left flex items-center gap-4">
          <span class="material-symbols-outlined">{CompanyLogo}</span>
          <h3 className="font-bold text-lg">{companyName}</h3>
        </div>

        <div className="right">
        <span class="material-symbols-outlined">more_horiz</span>
        </div>
      </div>

      <div className="middle bg-white px-8 flex items-center justify-between py-3 border-b border-slate-100">
         <p className="text-slate-800 font-medium">Last invoice</p>
         <p className="text-slate-600">{date}</p>
      </div>

      <div className="bottom bg-white px-8 flex items-center justify-between py-3 border-b border-slate-100">
         <p className="text-slate-800 font-medium">Amount</p>
         <div className="flex items-center gap-2">
         <p className="font-bold">{amount}</p>
         <button className={` ${status === "Overdue"?"bg-red-200 text-red-900" : status==="Paid"? "bg-green-200 text-green-900" : "bg-yellow-200 text-yellow-900"} font-bold border border-slate-500 rounded-xl px-2`}>{status}</button>
         </div>
      </div>
    </div>
  );
};

export default InvoiceStatus;
