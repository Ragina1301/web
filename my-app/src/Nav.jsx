import { Box } from "@chakra-ui/react";
import React from "react";
import {SearchIcon} from '@chakra-ui/icons'
import {PlusSquareIcon} from '@chakra-ui/icons'
import {HamburgerIcon} from '@chakra-ui/icons'

const Nav = () => {
  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={'space-between'} padding={'10px'}>
        <img draggable={"false"}
          width={50}
          src="https://cdn.icon-icons.com/icons2/3261/PNG/512/unsplash_logo_icon_206651.png"
          alt=""
        />
        <div className="menu">
            <SearchIcon className="search"/>
          <input
            className="input"
            type="text"
            placeholder="Search high-resolution images"
          />
          <PlusSquareIcon className="plus"/>
        </div>
        <nav>
          <a href="#">Explore</a>
          <a href="#">Advertise</a>
          <a href="#">Unsplash+</a>
          <div className="linya"></div>
        </nav>
        <div className="many">
        <div className="login">Log in</div>
        <button className="btn">Submit a photo</button>
        <HamburgerIcon className="burger"/>
        </div>
      </Box>
    </Box>
  );
};

export default Nav;
