import React from "react";

type HeaderProps = {
  title: string;
};

function SectionHeader({ title }: HeaderProps) {
  return (
    <h2 className="text-3xl min-w-fit max-[720px]:text-[1.7em]">{title}</h2>
  );
}

export default SectionHeader;
