import { Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { TPageName } from "./AppLayout";

export interface IHeaderMenu {
  label: string;
  href: string;
  activePage?: TPageName;
}

const HeaderMenu: React.FC<IHeaderMenu> = ({ href, label, activePage }) => {
  return (
    <Link className="cursor-pointer" to={href}>
      <Text className='text-white font-poppins-semibold tracking-5 cursor-pointer'>  
        {label}
      </Text>
      {/* <Text
        className={`font-semibold lg:tracking-3 ${
          activePage.toLowerCase() == label.toLowerCase()
            ? `bg-red text-white`
            : `bg-white text-primary-text`
        } rounded-full py-1 lg:py-[5px] px-2 lg:px-4`}
      >
        {label}
      </Text> */}
    </Link>
  );
};
export default HeaderMenu;
