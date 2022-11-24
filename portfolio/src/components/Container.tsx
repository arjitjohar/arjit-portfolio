import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  const { children } = props;
  return (
    <div className=" bg-[#353531] container mx-12 p-4 mt-7 rounded-lg">
      {children}
    </div>
  );
};

export default Container;
