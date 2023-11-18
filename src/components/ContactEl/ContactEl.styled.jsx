import styled from 'styled-components';
export const ContactLi = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
export const ContactDeleteBtn = styled.button`
  border: none;
  outline: none;
  background-color: #080808;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
  transition: all ease 0.1s;

  &:hover {
    transform: scale(1.05);
  }
`;
