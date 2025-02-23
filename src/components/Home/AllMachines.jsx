import { Link } from "react-router-dom";

const AllMachines = () => {
  const machines = [
    { name: "Mixer 1", gradient: "from-cyan-500 to-sky-500", link: "/machine01" },
    { name: "Mixer 2", gradient: "from-yellow-500 to-amber-500", link: "/machine02" },
    { name: "Mixer 3", gradient: "from-green-500 to-teal-500", link: "/machine03" },
    { name: "Mixer 4", gradient: "from-blue-500 to-indigo-500", link: "/machine04" },
    { name: "Mixer 5", gradient: "from-purple-700 to-fuchsia-600", link: "/machine05" },
    { name: "Mixer 6", gradient: "from-teal-700 to-blue-800", link: "/machine06" },
    { name: "Mixer 7", gradient: "from-gray-500 to-gray-700", link: "/machine07" },
    { name: "Mixer 8", gradient: "from-red-500 to-orange-500", link: "/machine08" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Mixer Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {machines.map((machine, index) => (
          <Link 
            to={machine.link} 
            key={index} 
            className={`bg-gradient-to-br ${machine.gradient} text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <h2 className="text-2xl font-semibold">{machine.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllMachines;
