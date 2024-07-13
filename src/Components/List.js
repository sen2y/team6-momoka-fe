// List.js
import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 336px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  padding: 10px;
  width: 288px;
  border: 1px solid #D9D9DE;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  border-radius: 16px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  margin: 15px 0 10px 0;
`;

const Location = styled.p`
  font-size: 14px;
  margin: 0 0 10px 0;
`;

const Tell = styled.p`
  font-size: 14px;
  margin: 0 0 10px 0;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
`;

const MenuItem = styled.li`
  font-size: 14px;
`;

const List = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Title>{item.title}</Title>
          <Location>{item.location}</Location>
          <Tell>{item.tell}</Tell>
          <MenuList>
            {item.menulist.map((menu, menuIndex) => (
              <MenuItem key={menuIndex}>{menu}</MenuItem>
            ))}
          </MenuList>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default List;