import React from "react";

type HeaderProps = {
  title: string;
};

function SectionHeader({ title }: HeaderProps) {
  return <h2 className="text-3xl min-w-fit">{title}</h2>;
}

export default SectionHeader;
