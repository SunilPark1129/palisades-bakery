import React from "react";

type HeaderProps = {
  title: string;
};

function SectionHeader({ title }: HeaderProps) {
  return <h2 className="text-3xl whitespace-nowrap">{title}</h2>;
}

export default SectionHeader;
