import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("love");

  function handleSubmit(e) {
    e.preventDefault();
    const submittedName = e.target.name.value;
    setName(submittedName);
    navigate("/welcome", { state: { name: submittedName } });
  }

  return (
    <>
      {/* background image */}
      <div
        style={{
          backgroundImage: `url("https://th.bing.com/th/id/R.33a01ae0ab322c69cfe00b215bec121e?rik=in645iOqJOq5ag&riu=http%3a%2f%2fwallpaperswide.com%2fdownload%2fvalentines_day_romantic_holiday-wallpaper-800x600.jpg&ehk=vSV4mauntOOEFKG0L5SLwNIrUqiki%2boPasB2uK9X7Vw%3d&risl=&pid=ImgRaw&r=0")`,
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bg-cover bg-center min-h-screen"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-pink-400 w-full max-w-md p-8 rounded-md shadow-md text-center"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-white p-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 border-red-600 text-white rounded-md w-2/5 py-2 transition-all hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
          <h2 className="text-white font-bold text-2xl mt-6">Happy Valentines Day</h2>
          <div className="text-white mt-4">
            <h3>Propose Your Love Today ❤️</h3>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
