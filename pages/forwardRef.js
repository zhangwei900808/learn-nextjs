import React from "react";
import Link from "next/link";

const MyButton = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    Click Me
  </a>
));

export default () => (
  <>
    <Link href="/about">
      <MyButton />
    </Link>
  </>
);
