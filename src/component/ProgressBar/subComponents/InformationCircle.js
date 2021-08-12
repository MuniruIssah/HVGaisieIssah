import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverBody } from "reactstrap";
import { PopOverItemList } from "./popOverItemList";
const PopOverStyles = {
  border: "1px solid #fbbc05",
  background: "#fff8c5",
  marginTop: "0.5rem",
  borderRadius: "6px",
};

export const InformationCircle = ({ instructions }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <>
      <div
        id="Popover1"
        className="progressIcon"
        icon={faInfoCircle}
      ></div>
      <Popover
        style={PopOverStyles}
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverBody>
          <PopOverItemList instructions={instructions} />
        </PopoverBody>
      </Popover>
    </>
  );
};
