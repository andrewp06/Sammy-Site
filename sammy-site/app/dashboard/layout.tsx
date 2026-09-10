// app/dashboard/layout.tsx
"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

import samStudio from '../../public/images/samStudio.png'

import { Old_Standard_TT } from "next/font/google"; 


const oldStandard = Old_Standard_TT({ 
    variable: "--font-old-standard", 
    subsets: ["latin"], 
    weight: ["400", "700"]
});


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define tab navigation links
  const tabs = [
        { name: "Digital", href: "/dashboard/digital" },
        { name: "Film", href: "/dashboard/film" },
        { name: "Mixed Media", href: "/dashboard/mixedMedia" },
        { name: "About", href: "/dashboard/about" },
        { name: "Contact", href: "/dashboard/contact" },
  ];

  return (
    <div className="font-serif text-center w-full min-h-screen bg-gray-400">
      
      {/* Tab Navigation Bar */}
      <div className="flex w-full mb-6 bg-black/20 text-white p-6 rounded">
        {tabs.map((tab) => {
            const isActive = 
            pathname === tab.href;
            
            return (
                <Link
                key={tab.href}
                href={tab.href}
                className={`transform scale-x-75 origin-left text-center flex-1 py-2 text-6xl font-semibold transition-colors ${
                    isActive
                    ? "text-black"
                    : "border-transparent text-white hover:text-gray-700"
                }`}
                >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* Tab Content Area */}
        <div className="w-full">
            <Image
                src={samStudio}
                alt="Samantha Studio logo"
                className="mx-auto block w-[15vw] h-auto"
                loading="eager"
                />
        </div>
      <main>{children}</main>
    </div>
  );
}
