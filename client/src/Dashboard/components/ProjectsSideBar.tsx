import React from 'react';
import styled from 'styled-components';
import { FaSortDown, FaSortUp, FaTrash } from 'react-icons/fa';

export const ProjectsSideBar = () => {
  const data = {
    listNotes: [{ id: 0, title: 'demo', description: 'demo desc' }],
  };
  return (
    <SideBarWrapper>
      <h2>All Tasks</h2>
      <div className='note-filter'>
        <span>{data?.listNotes.length} tasks</span>
        <div className='filters'>
          {/* <span onClick={onClickOrderHandler}>
            {orderBy === 'DESC' ? <FaSortDown /> : <FaSortUp />}
          </span> */}
        </div>
      </div>
      <div className='list-notes'>
        {data?.listNotes.map((note) => (
          <div
            key={note.id}
            // className={`note${selectedNote?.id === note.id ? ' active' : ''}`}
            // onClick={onSelectNoteHandler(note as any)}
          >
            <div className='note-detail'>
              <div className='note-title'>{note.title || 'Title'}</div>
              <div>{note.description || 'Content'}</div>
            </div>
            <div
              className='delete-btn'
              // onClick={onDeleteNoteHandler(note as any)}
            >
              <FaTrash />
            </div>
          </div>
        ))}
      </div>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 350px;
  padding-top: 4rem;
  color: ${(Props) => Props.theme.palette.primary.colorBlackCalm};
  background-color: ${(Props) => Props.theme.palette.primary.bgColor};
  display: flex;
  flex-direction: column;
  > h2 {
    font-weight: normal;
    padding: 20px;
  }
  .note-filter {
    justify-content: 'space-between';
    padding: 15px 20px;
    border-bottom: 1px solid #ccc;
    .filters span {
      cursor: pointer;
      padding: 3px;
    }
  }
  .list-notes {
    overflow-y: auto;
    height: 100%;
    .active {
      background-color: #fff;
    }
    .note {
      cursor: pointer;
      padding: 20px;
      border-bottom: ${(Props) => Props.theme.palette.primary.border};
      color: ${(Props) => Props.theme.palette.primary.colorGray};
      justify-content: 'space-between';
      &:hover {
        background-color: #eee;
        .delete-btn {
          visibility: visible;
        }
      }
      .note-detail {
        > div {
          margin-bottom: 8px;
        }
        .note-title {
          color: ${(Props) => Props.theme.palette.primary.colorBlackCalm};
          font-weight: bold;
        }
      }
      .delete-btn {
        visibility: hidden;
        cursor: pointer;
        padding: 5px;
        &:hover {
          transition: 0.3s;
          color: red;
        }
      }
    }
  }
`;
