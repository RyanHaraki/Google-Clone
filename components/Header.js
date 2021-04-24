import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, XIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!searchInputRef) {
      return;
    } else {
      router.push(`/search?term=${term}`);
    }
  };

  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-6 items-center ">
        <Image
          height={40}
          width={120}
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex border border-gray-200 shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 rounded-full flex-grow">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow width-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar url="https://coaching.papareact.com/ai9" className="ml-auto" />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
