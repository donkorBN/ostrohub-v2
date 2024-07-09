"use client"
import { PageLayout, PageMeta } from "@/types"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

type layout = {
  [t in PageLayout]: JSX.Element;
}

export default function Layout({children, Component, PageProps}: any) {
  const meta: PageMeta = Component?.meta;
  const router = useRouter()
  const isLoggedIn = false

  useEffect(() => {
    if (meta?.allowAccess === "noauth" && isLoggedIn) {
      // handle user authentication here also from external authentication parameters
      alert("You are signed in already ✅")
    }

    if (meta?.allowAccess === "auth" && isLoggedIn) {
      alert("Not permitted 📛")
      router.replace("/")
    }
  }, [meta?.allowAccess, isLoggedIn, router])

  const layouts:layout = {
    blank: <>{children}</>,
    public: <div {...PageProps}>{children}</div>,
    auth: <div {...PageProps}>{children}</div>,
    dashboard: <div {...PageProps}>{children}</div>,
  }

  let render = layouts[(meta?.layout as keyof typeof layouts) ?? "blank"];

  return (
    <motion.div
      initial={{z: 300, opacity: 0}}
      animate={{z: 0, opacity: 1}}
      exit={{z: 300, opacity: 0}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      {render}
    </motion.div>
  )
}
