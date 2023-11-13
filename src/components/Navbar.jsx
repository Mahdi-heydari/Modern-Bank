/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { useState } from "react";

// const initialItems = Array.from({ length: 10 }, (_, index) => {
//   return <div key={index}>item {index+1}</div>;
// });

// const ItemsTable = () => {
//   const [items, setItems] = useState(initialItems);

//   const handleDelete = (id) => {
//     const updatedItems = items.filter((item) => item.key !== id);
//     setItems(updatedItems);
//   };

//   return (
//     <table className=" bg-red-500 inline-block p-6">
//       <thead className="text-blue-900">
//         <tr className="flex justify-around">
//           <th>ID</th>
//           <th>Name</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map((item) => (
//           <tr key={item.key} className="flex justify-between mb-3">
//             <td>{item.index}</td>
//             <td className="mr-14 inline-block">{item.props.children}</td>
//             <td>
//               <button onClick={() => handleDelete(item.key)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ItemsTable;

import { useState } from "react";
import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants/index";

export default function Hero() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />

      {/* menu for Desktop and tablet */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins ${
              index === navLinks.length ? "mr-0" : "mr-10"
            } font-normal text-white text-[16px] cursor-pointer duration-200 hover:text-[#73E4E9] hover:tracking-wide`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* menu for Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute top-20 right-0 mx-4 my-2 p-6 min-w-[140px] sidebar rounded-xl `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins ${
                  index === navLinks.length ? "mr-19" : "mb-6"
                } font-normal text-white text-[16px] cursor-pointer`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
