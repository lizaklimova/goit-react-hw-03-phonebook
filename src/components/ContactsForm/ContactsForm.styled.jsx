import styled from 'styled-components';

export const ContactsFormEl = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 15px;
  letter-spacing: 0.05em;
`;

export const ContactsNameInput = styled.input`
  padding: 0.7em 1.4em 0.7em 1.1em;
  border-radius: 20px;
  border: 2px solid #000000;
  &:focus {
    outline: none;
    border-color: rgba(20, 167, 62, 1);
  }
`;
export const ContactsNumberInput = styled.input`
  padding: 0.7em 1.4em 0.7em 1.1em;
  border-radius: 20px;
  border: 2px solid #000000;
  &:focus {
    outline: none;
    border: 2px solid rgba(20, 167, 62, 1);
  }
`;
export const Label = styled.label`
  padding-left: 10px;
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 16px;
  width: 35%;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  &:hover,
  &:active {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }
`;
