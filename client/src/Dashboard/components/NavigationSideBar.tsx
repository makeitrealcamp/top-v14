import React from 'react';
import styled from 'styled-components';
import { FaBook, FaPlus, FaSearch, FaSignOutAlt } from 'react-icons/fa';

export const NavigationSideBar = () => {
  return (
    <SidebarWrapper>
      <div className='user-profile'>
        <div>{'username'}</div>
        <span>{'username'}</span>
        <span onClick={() => console.log('onLogoutHandler')}>
          <FaSignOutAlt />
        </span>
      </div>
      <div className='search-container'>
        <FaSearch />
        <input
          placeholder='Search'
          value={'searchText'}
          onChange={({ target }) => console.log(target.value)}
        />
      </div>
      <div
        className='newnote-button'
        onClick={() => console.log('onAddNoteHandler')}
      >
        <FaPlus />
        <span>New Project</span>
      </div>
      <ul className='navs-menu'>
        <li>
          <FaBook />
          <span>All Projects</span>
        </li>
      </ul>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  padding-top: 5.5rem;
  background-color: ${(Props) => Props.theme.palette.primary.colorBlack};
  color: #ccc;
  .user-profile {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    align-items: center;
    padding: 20px;
    gap: 10px;
    > div:first-of-type {
      background-color: ${(Props) => Props.theme.palette.primary.primaryColor};
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      justify-content: center;
    }
    > span:nth-of-type(1) {
      white-space: nowrap;
    }
    > span:last-child {
      justify-self: flex-end;
      cursor: pointer;
      transition: 0.3s;
      padding: 5px;
      &:hover {
        color: red;
      }
    }
  }
  .search-container {
    justify-content: center;
    padding: 10px 20px;
    border-radius: 30px;
    background-color: ${(Props) => Props.theme.palette.primary.colorBlackCalm};
    margin: 0 20px;
    margin-bottom: 14px;
    > input {
      background-color: transparent;
      color: #ccc;
      border: none;
      margin-left: 10px;
      font-size: 16px;
      outline: none;
    }
  }
  .newnote-button {
    justify-content: left;
    cursor: pointer;
    gap: 10px;
    color: white;
    border-radius: 30px;
    padding: 10px 20px;
    margin: 0 20px;
    background-color: ${(Props) => Props.theme.palette.primary.primaryColor};
    &:hover {
      background-color: ${(Props) =>
        Props.theme.palette.primary.primaryColorDark};
    }
  }
  .active {
    background-color: #444;
    color: white;
  }
  .navs-menu {
    margin-top: 20px;
    padding: 0;
    > li {
      justify-content: left;
      gap: 10px;
      padding: 10px 40px;
      cursor: pointer;
      &:hover {
        background-color: #333;
      }
    }
  }
`;
