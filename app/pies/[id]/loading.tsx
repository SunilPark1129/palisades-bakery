function loading() {
  return (
    <div className="wrapper">
      <main className="flex flex-col gap-4 p-4 mb-8 max-md:p-0">
        <div className="flex gap-2 max-md:px-2 h-[24px] animate-pulse bg-[#c6c6c6]"></div>

        <div className="flex gap-8 max-md:flex-col max-md:gap-4">
          <div className="relative flex-1 w-full max-w-[900px] aspect-square mb-auto max-md:max-w-full animate-pulse bg-[#c6c6c6]"></div>

          <div className="flex flex-col flex-1 gap-8 max-w-xl max-md:px-4 max-md:max-w-full">
            <div className="flex flex-col gap-4 max-md:gap-2 animate-pulse bg-[#c6c6c6]">
              <h1 className="h-[24px] max-md:text-xl"></h1>
              <div className="h-[24px]"></div>
              <p className="h-[16px]"></p>
            </div>

            <div className="w-full border-b border-b-gray-200 mx-auto"></div>

            <div className="bg-gray-100 p-4">
              <div className="flex flex-col gap-4">
                <p>Did you find something you like?</p>
                <p>We're happy to serve you!</p>
                <ul className="list-disc list-outside pl-6">
                  <li>You can purchase it in store.</li>
                  <li>You can also pre-purchase by calling us.</li>
                  <li>
                    If you'd like to check whether it's currently available,
                    please feel free to give us a call.
                  </li>
                </ul>
                <div className="font-semibold">
                  <address className="not-italic">
                    325 Broad Ave, Palisades Park, NJ 07605
                  </address>
                  <div>(201) 347-6696</div>
                </div>
                <p>*For custom orders, please contact our bakery by phone.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default loading;
