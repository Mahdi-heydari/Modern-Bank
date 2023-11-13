/* eslint-disable react/prop-types */
export default function Button({ styles="" }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient duration-300 hover:ml-1 hover:bg-slate-50 rounded-md outline-none font-poppins font-medium text-primary text-[18px]  ${styles}`}
    >
        Get Started
    </button>
  );
}
