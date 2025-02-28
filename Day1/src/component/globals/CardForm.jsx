import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const CardForm = () => {
  const [form, setForm] = React.useState({
    name: "",
    img: "",
    desc: "",
    profile: "",
  });

  const [submittedData, setSubmittedData] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showCard, setShowCard] = React.useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmittedData(form); // Save data before resetting form
    console.log(form);
    setShowCard(true);
    setForm({ name: "", img: "", desc: "", profile: "" }); // Reset form
    console.log(submittedData)
  };

  return (
    <>
    <div>
      <div className="py-16">
        <form
          className="w-1/3 mx-auto border border-slate-400 p-4"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col space-y-3">
            <div className="w-full">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                name="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
                id="name"
                className="p-2 border-0 bg-slate-200 w-full rounded-lg"
                placeholder="Enter name"
                type="text"
              />
            </div>

            <div className="w-full">
              <label htmlFor="img" className="text-sm">
                Image Url
              </label>
              <input
                value={form.img}
                onChange={(e) => setForm({ ...form, img: e.target.value })}
                name="img"
                id="img"
                className="p-2 border-0 bg-slate-200 w-full rounded-lg"
                placeholder="Enter Image Url"
                type="url"
              />
            </div>

            <div className="w-full relative">
              <label htmlFor="desc1" className="text-sm">
                Description
              </label>
              <input
                id="desc"
                onChange={(e) => {
                  setForm({ ...form, desc: e.target.value });
                  console.log(e.target.value);
                }}
                name="desc1"
                value={form.desc}
                className="p-2 border-0 bg-slate-200 w-full rounded-lg"
                placeholder="Enter Description"
                type="text"
              />
            </div>

            <div className="w-full relative">
              <label htmlFor="desc2" className="text-sm">
                Job Profile
              </label>
              <input
                id="desc2"
                onChange={(e) => {
                  setForm({ ...form, profile: e.target.value });
                  console.log(e.target.value);
                }}
                name="profile"
                value={form.profile}
                className="p-2 border-0 bg-slate-200 w-full rounded-lg"
                placeholder="Enter Job Profile"
                type="text"
              />
            </div>

            <div className="w-full my-5">
              <button
                type="submit"
                className="w-full hover:bg-yellow-500 bg-yellow-400 p-2 rounded-lg text-white"
                onClick={()=>setShowCard(true)}
              >
                Submit Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    {showCard && submittedData &&(
      <div className={`cardx w-1/3 mx-auto border border-slate-200 rounded-lg drop-shadow-2xl mb-10 flex flex-col gap-2 px-5 py-6 ${showCard?"":"hidden"}`}>
            <div className=" px-12 py-6 rounded-lg">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <img src={submittedData.img} alt={submittedData.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <h2 className="text-xl font-bold">{submittedData.name}</h2>
                    <p className="text-gray-700"><span className="text-lg font-bold">Job Profile : </span>{submittedData.profile}</p>
                    <p className="text-gray-600"><span className="text-lg font-bold">Description : </span>{submittedData.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
    )}
    </>
  );
};

export default CardForm;
