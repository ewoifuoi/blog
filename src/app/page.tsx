"use client"
// import getMDXFiles from "@/lib/utils"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>test</h1>
      <button className="w-20 h-10 m-4 bg-blue-300 text-center items-center rounded-2xl" 
      onClick={()=>{

        alert("test");

      }}>test</button>
    </div>
  );
}
