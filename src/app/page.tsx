export default function Home() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex justify-center flex-col">
      <div className="border rounded border-black self-center flex flex-col w-auto h-auto ">
        {/* md:w-1/3 md:h-1/3 */}
        <div className="flex gap-2 px-2 justify-end border-b border-black">
          <span className="flex rounded-full p-2 my-2 w-1 h-1  bg-red-500 hover:bg-red-600 border border-black"></span>
          <span className="flex rounded-full p-2 my-2 w-1 h-1  bg-blue-500 hover:bg-blue-600 border border-black"></span>
          <span className="flex rounded-full p-2 my-2 w-1 h-1  bg-yellow-500 hover:bg-yellow-600 border border-black"></span>
        </div>
        <div className="flex flex-col w-full h-full p-5">
          <h1 className="font-semibold text-7xl tracking-tighter">
            Thomas Hirst
          </h1>
          <ul className="flex gap-2 text-2xl tracking-tighter">
            <li>Student</li>|<li>Software Engineer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
