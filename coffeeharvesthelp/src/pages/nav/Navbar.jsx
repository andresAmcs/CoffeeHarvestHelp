import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

import {Link} from 'react-router-dom';
import './css/Navbar.css';
import {navItems} from './NavItems';
import Button from './Button';
import Dropdown from './Dropdown';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    <>
      <NavContainer>
        <h2>Navbar</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>    

            <ul className="flex flex-row gap-4">
            {navItems.map((item) => {
              if (item.title === "Services") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path} onClick={() =>{ setTimeout(handleClick,1500)}}>{item.title}</Link>

                    {dropdown && <Dropdown/>}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path} onClick={handleClick}>{item.title}</Link>
                </li>
              );
            })}
            </ul>
        </div>

        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  ${'' /* .nav-item{
    @media(min-width: 770px){
      background:red;

    }
  } */}

  h2{
    color: white;
    font-weight: 400;
  }
  display: flex;
  padding: 1rem;
  background-color: #6b0012ff;
  align-items: center;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    transition: all .2s ease;
  }
 
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 2;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }

    @media(min-width: 768px){
      position: relative;
      margin: 0;
      top: 0px;
      left: 0px;
      right: 0;
      a{
        font-size: 1rem;
        color: white;
      }

    }
  }

  .links.active{
    position:absolute;
    left:0;
    right:0;
    top: 20%;

    @media(min-width: 770px){
      top: 0%;
      position:initial;
      right: 0;

    }
  }

  .burguer{
    z-index: 3;
    @media(min-width: 768px){
      display: none;
    }
  }

`

const BgDiv = styled.div`
  background-color: #111827;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;

  &.active{
    @media(min-width: 770px){
      width: 0%;
      height: 0%;
      margin: 0;
    }
    border-radius: 0 0 75% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`







// import React, { useState }from 'react';
// import {Link} from 'react-router-dom';
// import * as Icons from 'react-icons/fa';
// import './css/Navbar.css';
// import {navItems} from './NavItems';
// import Button from './Button';
// import Dropdown from './Dropdown';

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);
//   return (
//     <>
//     <nav className='navbar'>
//       <Link to="/" className="navbar-logo">
//         Nature
//         <Icons.FaTree/>
//       </Link>
//       <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <Button />
//     </nav>
    
//     </>
//   );
// }

