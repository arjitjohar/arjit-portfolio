import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout(props: Props) {
  const { children } = props;

  return <div>{children}</div>;
}
