import Image from "next/image";
import React, { useEffect } from "react";
import Button from "src/common/Button/Button";
import Image404 from "public/assets/images/404.png";
import Text from "src/common/Text/Text";
import LogoPC from "src/common/Logo/Logo";
import { toast } from "react-toastify";
export default function Page404() {
  useEffect(() => {
    toast.error("Server error, please try again later.");
  }, []);
  return (
    <div className="page-404 p-[40px]">
      <LogoPC />
      <div className="max-w-[600px] m-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-[40px]">
            <Image src={Image404} width={400} height={400} alt="404" />
          </div>
          <div className="space-y-[24px] mb-[40px]">
            <div className="text-[24px] leading-[32px] font-semibold">
              Oops! Somethings went wrong
            </div>
            <Text text="Compare the two words and decide whether their meaning is almost the same or opposite. For same meaning, click right button. For oppsites, click the left button. For skip question, click the up button. You can use Computer keyboard instead" />
          </div>
          <div>CTA here</div>
        </div>
      </div>
    </div>
  );
}
