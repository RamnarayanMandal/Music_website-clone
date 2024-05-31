"use client";
import React from "react";
import { Label } from "../component/ui/label";
import { Input } from "../component/ui/input";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Boxes } from "../component/ui/background-boxes";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
    
      <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg pt-36 ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <div className="max-w-screen-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
      <form className="my-8 relative z-50" onSubmit={handleSubmit}>
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Login
      </h1>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" className="w-full" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" className="w-full" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="twitterpassword">Twitter Password</Label>
              <Input id="twitterpassword" placeholder="••••••••" type="password" className="w-full" />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Login &rarr;
              <BottomGradient />
            </button>
            <div className="flex justify-center content-center items-center">
              <Link href={`/singin`} className="my-8 text-center text-white">
                Create new Account?
              </Link>
            </div>
          </form>
        </div>
        </div>
        
    </>
  );
};

export default Page;
