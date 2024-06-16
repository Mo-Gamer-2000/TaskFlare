"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = ({ id }) => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-yellow-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteBlock;
