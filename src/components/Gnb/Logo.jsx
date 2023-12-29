import React from "react";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

export default function Logo() {
  return (
    <h1 className="group">
      <Link
        to="/"
        className="flex flex-nowrap gap-x-1 items-center text-2xl font-bold"
      >
        <AiFillYoutube className="text-violet-700 text-3xl  transition-colors duration-300 group-hover:text-violet-600" />
        Duetube
      </Link>
    </h1>
  );
}
