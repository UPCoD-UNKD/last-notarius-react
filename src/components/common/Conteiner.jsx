// import { Slot, component$ } from "@builder.io/qwik";
import clsx from "clsx";
// import { Children } from "react";

// type ContainerProps = {
//   class?: string | undefined;
//   padding?: "normal" | "small";
// };

const Container = ({ class: className, padding = "normal", children }) => {
    return (
      <div
        class={clsx(
          "mx-auto max-w-[1280px] px-[20px] lg:px-7",
          padding === "small" && "xl:px-10",
          padding === "normal" && "xl:px-[30px]",
          className
        )}
      >
        {children}
      </div>
    );
  }
  export default Container