import React from "react";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center ">
        {children}
      </div>
    </div>
  );
};

export default LandingLayout;
