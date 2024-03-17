import Image from "next/image";
import { Header } from "./components/header";
import { HeaderNav } from "./components/header-nav";
import { Content } from "./components/content";

export default function Home() {
  return (
    <div>
        <Header />
      <div className="bg-background-image h-screen">
        <HeaderNav />
        <Content />
      </div>
    </div>
  );
}
