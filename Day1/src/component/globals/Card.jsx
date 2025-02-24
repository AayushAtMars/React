import { FaLinkedin } from "react-icons/fa6";

const Card = ({ name, designation, img, linkedin, bio }) => {
  return (
    <div className="h-[200px] w-[500px] border border-slate-600 bg-white shadow-lg ">
      <div className=" px-12 py-6 rounded-lg">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img src={img} alt={name} className="w-20 h-20 rounded-xl object-cover" />
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-600">{designation}</p>
            </div>
          </div>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} color="black"/>
          </a>
        </div>

        <p className="text-gray-700 mt-4">{bio}</p>
      </div>
    </div>
  );
};

export default Card;