
export default function Home() {
  
  return (
  <div className="flex justify-center mt-5 lg:mt-48 ">
      <main className=" w-full lg:w-[800px] border border-border bg-[#08252B] lg:bg-green-1 rounded-[40px] p-6 lg:p-12 lg:pt-10 flex flex-col gap-10 text-center  ">
        <h1 className="text-2xl lg:text-4xl font-semibold">Conference Ticket Generator</h1>
        <h2 className="text-xl lg:text-2xl font-semibold">HNG STAGE 2 TASK</h2>
        <p className="">An web application that allows users purchase tickets for events. They fill out a form with their details and generate a ticket upon successful submission</p>
      </main>
    </div>
  );
}
