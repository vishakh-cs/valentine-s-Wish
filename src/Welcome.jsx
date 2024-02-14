import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Welcome() {
  const location = useLocation();
  const name = location.state?.name;

  return (
    <div>
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/valentines-day-greetings-card-design-template-a7b19a8d2b392358478cc6bb6a2a99db_screen.jpg?ts=1642063123")`,
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
      >
        <div className="relative w-full max-w-[700px] mx-4">
          <img
            className="w-full mt-8"
            src="https://cdn-icons-png.flaticon.com/512/4637/4637993.png"
            alt="letter"
          />
          {name ? (
            <i className="absolute top-1/2  w-full text-nowrap text-black lg:text-lg font-bold text-center md:text-lg md:text-pretty sm:text-sm sm:text-pretty">
              I am in Love with You, my dear <span className='text-red-600'>{name}❤️</span>
            </i>
          ) : (
            <div className="bg-red-600 w-full text-black font-bold h-10 text-2xl text-center">
              Invalid access to the Welcome page.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
