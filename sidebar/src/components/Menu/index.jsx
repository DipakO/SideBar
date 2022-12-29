import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
const Menu = ({ open }) => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [open]);
  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default Menu;

// const arrr?:string
