"use client";
import { useAccount } from "wagmi";
import { Hero } from "../components/layout/Hero";
import { HomeMenu } from "../components/layout/HomeMenu";

export default function Home() {
  const { address, status } = useAccount();
  return (
    <div>
      <Hero />
      <HomeMenu />
    </div>
  );
}
