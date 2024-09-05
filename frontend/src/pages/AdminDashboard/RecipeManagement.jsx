// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import {
//   FaEye,
//   FaEdit,
//   FaTrash,
//   FaHome,
//   FaUsers,
//   FaCoffee,
//   FaBook,
//   FaGlassWhiskey,
//   FaShoppingCart,
//   FaComments,
//   FaEnvelope,
// } from "react-icons/fa";

// const RecipeManagement = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/recipes"
//         );
//         setRecipes(response.data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//         setError("Error fetching recipes");
//       }
//     };

//     fetchRecipes();
//   }, []);

//   const NavItem = ({ to, icon, text }) => (
//     <li>
//       <Link
//         to={to}
//         className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
//       >
//         <span className="mr-3 text-lg">{icon}</span>
//         {text}
//       </Link>
//     </li>
//   );

//   if (error)
//     return (
//       <div
//         className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
//         role="alert"
//       >
//         {error}
//       </div>
//     );

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <nav className="w-64 bg-white shadow-lg">
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
//         </div>
//         <ul className="mt-4">
//           <NavItem to="/admin" icon={<FaHome />} text="Dashboard" />
//           <NavItem to="/admin/users" icon={<FaUsers />} text="Users" />
//           <NavItem to="/admin/baristas" icon={<FaCoffee />} text="Baristas" />
//           <NavItem to="/admin/recipes" icon={<FaBook />} text="Recipes" />
//           <NavItem
//             to="/admin/beverages"
//             icon={<FaGlassWhiskey />}
//             text="Beverages"
//           />
//           <NavItem to="/admin/orders" icon={<FaShoppingCart />} text="Orders" />
//           <NavItem to="/admin/reviews" icon={<FaComments />} text="Reviews" />
//           <NavItem
//             to="/admin/contact-messages"
//             icon={<FaEnvelope />}
//             text="Contact Messages"
//           />
//         </ul>
//       </nav>

//       <main className="flex-1 p-8 overflow-y-auto">
//         <div className="recipe-management bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">
//             Recipe Management
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Barista
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Cooking Time
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Rating
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {recipes.map((recipe) => (
//                   <tr key={recipe._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {recipe.name}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {recipe.baristaId.username}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {recipe.cookingTime}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {recipe.rating.toFixed(1)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <button className="text-blue-600 hover:text-blue-800 mr-2 transition duration-150 ease-in-out">
//                         <FaEye className="inline mr-1" /> View
//                       </button>
//                       <button className="text-yellow-600 hover:text-yellow-800 mr-2 transition duration-150 ease-in-out">
//                         <FaEdit className="inline mr-1" /> Edit
//                       </button>
//                       <button className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out">
//                         <FaTrash className="inline mr-1" /> Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default RecipeManagement;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const RecipeManagement = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/recipes"
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Error fetching recipes");
      }
    };

    fetchRecipes();
  }, []);

  if (error)
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
        role="alert"
      >
        {error}
      </div>
    );

  return (
    <div className="recipe-management bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Recipe Management
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Barista
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cooking Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recipes.map((recipe) => (
              <tr key={recipe._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{recipe.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {recipe.baristaId.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {recipe.cookingTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {recipe.rating.toFixed(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-800 mr-2 transition duration-150 ease-in-out">
                    <FaEye className="inline mr-1" /> View
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-800 mr-2 transition duration-150 ease-in-out">
                    <FaEdit className="inline mr-1" /> Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out">
                    <FaTrash className="inline mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeManagement;