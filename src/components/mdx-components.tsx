import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const href = typeof props.href === "string" ? props.href : "";
    const external = href.startsWith("http");
    return (
      <a
        {...props}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      />
    );
  },
};
