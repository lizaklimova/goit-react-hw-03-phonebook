import styled from 'styled-components';
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;
export const SearchLabel = styled.label`
  padding-left: 10px;
  letter-spacing: 0.05em;
  margin-bottom: 15px;
`;
export const SearchInput = styled.input`
  padding: 0.7em 1.4em 0.7em 1.1em;
  border-radius: 20px;
  border: 2px solid #000000;
  width: 30%;
  &:focus {
    outline: none;
    border: 2px solid rgba(20, 167, 62, 1);
  }
`;
