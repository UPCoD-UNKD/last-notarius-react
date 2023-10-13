// import { component$, useStore } from "@builder.io/qwik";
// import {useState, useEffect} from "react"
import IconMenu from "../icons/IconMenu";
import React from "react";
// import { IconXMark } from "../icons/IconXMark";

export default function ToggleMenu({ setIsShown, isShown }) {
  // const { iconClass } = props;

  return (
    <button
      type="button"
      class="  inline-flex h-8 w-8 z-[50] items-center  rounded-md text-sm transition duration-300  ease-in-out "
      aria-label="Toggle Menu"
      onClick={() => {
        setIsShown(!isShown);
        document.body.classList.toggle("lockBody");

     
      }}
    >
      {/* <IconMenu class={iconClass} /> */}
      {/* {store.isExpanded ? <IconXMark /> : <IconMenu />} */}
      <IconMenu />
    </button>
  );
}
