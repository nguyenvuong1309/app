import { useNavigate } from "react-router-dom";
import svg from "../../assets/svg/404.svg";
import PATH from "../../config/path";

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(PATH.HOME);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <img src={svg} alt="404" className="w-1/2 max-w-md mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={handleBackToHome}
      >
        Back to Home
      </button>
    </div>
  );
};
