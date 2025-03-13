"use client";

import Link from "next/link";
import { APP_NAME } from "@/libs/constants";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Navbar = () => {
  return (
    <nav className="bg-[#000000] px-8 border-b border-[#1F2937]">
      <div className="flex justify-between items-center body-container h-16">
        <Link href={"/"} className="text-purple-700 text-2xl font-bold">
          {APP_NAME}
        </Link>

        <div className="border hover:border-slate-900 rounded">
          <WalletMultiButton />
        </div>
      </div>
    </nav>
  );
};
