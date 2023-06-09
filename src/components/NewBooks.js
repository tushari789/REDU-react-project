import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Images from "./layout/Images";
import Flex from "./layout/Flex";

const NewBooks = () => {
  return (
    <div className="max-w-container mx-auto">
      <Flex className="flex mt-[143px]">
        <div className="w-3/6 mt-[150px]">
          <Heading className="font-pops font-extrabold text-[54px]">
            Get thousands of New Books
          </Heading>
          <SubHeading className=" font-pops text-lg font-medium w-[520px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </SubHeading>
          <div className="mt-10">
            <a className="bg-primary py-4 px-9 rounded-lg border border-solid border-primary text-white font-pops font-normal text-sm hover:bg-[#2C2A4E]   hover:transition  ease-in-out duration-300 cursor-pointer">
              Start Free
            </a>
          </div>
        </div>
        <div className="w-3/6 ">
          <Images imgsrc="assets/books.png" />
        </div>
      </Flex>
    </div>
  );
};

export default NewBooks;
