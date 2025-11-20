function Block() {
  return (
    <section className="bg-gray-100 py-32">
      <div className="wrapper">
        <div className="flex flex-col gap-4 p-4 px-8 mx-auto max-w-120">
          <h2 className="text-3xl max-[720px]:text-[1.7em]">
            Enjoy our freshly handcrafted{" "}
            <span className="font-semibold">Cookies</span> &{" "}
            <span className="font-semibold">Pies</span>
          </h2>
          <p>
            Enjoy our freshly baked, handcrafted cookies made in-house. From
            classic flavors to seasonal specials, each cookie is prepared with
            quality ingredients for the perfect bite.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Block;
