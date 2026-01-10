type Props = {};

function loading({}: Props) {
  return (
    <div className="wrapper">
      <main className="flex p-4 pt-0 max-sm:p-2 gap-4">
        <aside className="sticky h-full aside-top flex flex-col gap-2 max-w-44 mt-8 w-full max-[900px]:hidden">
          <div>Filter</div>
          <div className="flex flex-col gap-1 pl-1">
            {[1, 2, 3, 4].map((item) => (
              <button
                key={item}
                className="bg-[#c6c6c6] h-6 w-full animate-pulse"
              ></button>
            ))}
          </div>
        </aside>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex">
            <div className="flex gap-2">
              <div className="bg-[#c6c6c6] h-6 w-12 animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] max-[580px]:grid-cols-[repeat(2,1fr)] gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((entry) => (
              <section key={entry}>
                <div className="">
                  <div className="relative w-full aspect-square overflow-hidden bg-[#c6c6c6] animate-pulse"></div>
                </div>
                <div className="py-2">
                  <h2 className="bg-[#c6c6c6] h-6 w-full animate-pulse"></h2>
                  <p className="bg-[#c6c6c6] h-6 w-full animate-pulse"></p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default loading;
