import useDates from "~/utils/useDates";

export default function HomePage() {
  const { monthDatesToRender } = useDates(new Date());

  return (
    <main className="min-h-screen bg-gray-300 p-2">
      <div className="grid grid-cols-7 gap-[1px] bg-black p-[1px]">
        <div className="bg-gray-300 px-2 py-1">sunday</div>
        <div className="bg-gray-300 px-2 py-1">monday</div>
        <div className="bg-gray-300 px-2 py-1">tuesday</div>
        <div className="bg-gray-300 px-2 py-1">wednesday</div>
        <div className="bg-gray-300 px-2 py-1">thursday</div>
        <div className="bg-gray-300 px-2 py-1">friday</div>
        <div className="bg-gray-300 px-2 py-1">saturday</div>
        {monthDatesToRender.map((date, index) => {
          return (
            <div key={index} className={`h-20 bg-gray-300 p-2`}>
              {date}
            </div>
          );
        })}
      </div>
    </main>
  );
}
