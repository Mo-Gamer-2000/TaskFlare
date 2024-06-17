"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTask = async () => {
    const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-white hover:cursor-pointer hover:text-red-400 text-lg"
      onClick={deleteTask}
    />
  );
};

export default DeleteBlock;
