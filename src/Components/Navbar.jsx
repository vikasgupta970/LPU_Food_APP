const Navbar=()=>{
    return(
        <div className="grid grid-cols-1 bg-red-500 md:bg-yellow-400  md:grid-cols-3  lg:bg-green-500 shadow-2xl rounded-full m-3 p-2 items-center">
            <div className="md:text-start px-12">Logo</div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:text-start ">Home</div>
                <div className="">About us</div>
                <div className="md:text-end">Explore</div>
            </div>
            <div className="flex justify-center">
            <div className="flex md:items-center py-1 md:px-3">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-red-700 md:text-pink-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-red-600 md:bg-pink-400  bg--600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
            </div>
        </div>
    )
}
export default Navbar;