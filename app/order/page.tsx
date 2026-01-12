import React from "react";

type Props = {};

async function page({}: Props) {
  await fetch("http://localhost:3000/api/order");
  return <div>Ordering</div>;
}

export default page;
