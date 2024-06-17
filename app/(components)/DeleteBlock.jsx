"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = ({ id }) => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-white hover:cursor-pointer hover:text-red-400 text-lg"
    />
  );
};

export default DeleteBlock;
