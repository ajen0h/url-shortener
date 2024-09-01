import { ReactNode } from "react";

export default function Container({children}:{children:ReactNode}) {
  return (
    <section className="mx-auto max-w-7xl p-6  md:px-12 lg:px-16">
        {children}
    </section>
  )
}
