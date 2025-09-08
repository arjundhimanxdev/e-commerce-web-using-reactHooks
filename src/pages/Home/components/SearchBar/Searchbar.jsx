

const Searchbar = () => {
  return (
    <>
    <div className=" mt-6">
        <form action="" className="flex justify-center p-4 rounded-2xl gap-2 bg-gray-300"
            >
            <input 
            type="text"  
            className="px-2 w-auto md:w-[20rem] bg-gray-100 text-md rounded-2xl border-2 border-orange-500 outline-none"/>
            <button className="cursor-pointer text-white bg-orange-500 py-2 px-4 rounded-2xl font-semibold">Search</button>
        </form>
    </div>
    
    </>
  )
}

export default Searchbar