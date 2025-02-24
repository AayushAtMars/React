import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Form = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const [submittedData, setSubmittedData] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showCard, setShowCard] = React.useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmittedData(form); // Save data before resetting form
    console.log(form);
    setShowCard(true);
    setForm({ name: "", email: "", password: "", gender: "" }); // Reset form
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
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                name="email"
                id="email"
                className="p-2 border-0 bg-slate-200 w-full rounded-lg"
                placeholder="Enter Email"
                type="email"
              />
            </div>

            <div className="w-full relative">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                  console.log(e.target.value);
                }}
                name="password"
                value={form.password}
                className="p-2 border-0 bg-slate-200 w-full rounded-lg"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
              />
              {showPassword ? (
                <FaRegEye
                  onClick={() => setShowPassword(false)}
                  size={18}
                  color="black"
                  className="absolute bottom-3 z-10 right-4 cursor-pointer"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(true)}
                  size={18}
                  color="black"
                  className="absolute z-10 bottom-3 right-4 cursor-pointer"
                />
              )}
            </div>

            <div className="w-full">
              <label htmlFor="gender" className="text-sm">
                Gender
              </label>
              <select
                className="w-full p-2 bg-slate-200"
                name="gender"
                id="gender"
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                value={form.gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
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
      <h1 className="font-bold text-3xl">{submittedData.name}</h1>
      <p className="text-slate-600"><span className="font-bold text-xl text-black">Email : </span>{submittedData.email}</p>
      <p className="text-slate-600"><span className="font-bold text-xl text-black">Password : </span>{submittedData.password}</p>
      <p className="text-slate-600"><span className="font-bold text-xl text-black">Gender : </span>{submittedData.gender}</p>
  </div>
  
    )}
    </>
  );
};

export default Form;
