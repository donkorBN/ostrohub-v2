import Typography from "@/components/typography";

export default function Home() {
  return (
    <main>
      <Typography.p>Hello there</Typography.p>
      <Typography.h1>Hello there</Typography.h1>
    </main>
  );
}

const meta = {
  pageKey: "home",
  layout: "public",
  allowAccess: "all"
}

Home.meta = meta
