import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  
  return (
  <div className="flex justify-center mt-20 lg:mt-48 ">
      <main className=" w-full lg:w-[800px] border border-border bg-[#08252B] lg:bg-green-1 rounded-[40px] p-6 lg:p-12 lg:pt-10 flex flex-col gap-10 text-center  ">
        <h1 className="text-2xl lg:text-4xl font-semibold">Conference Ticket Generator</h1>
        <h2 className="text-xl lg:text-2xl font-semibold">HNG STAGE 2 TASK</h2>
        <p className="">An web application that allows users purchase tickets for events. They fill out a form with their details and generate a ticket upon successful submission</p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-[80%] m-auto justify-center">
        <Link href={'/event'}><Button className='w-auto bg-border hover:scale-110 hover:animate-none' text={'Go to Event booking'}/></Link>
        <Link href={'/project'}><Button className='w-auto bg-border hover:scale-110 hover:animate-none' text={'view more about task'}/></Link>
        </div>
      </main>
    </div>
  );
}
