import { nanoid } from 'nanoid';
import {
  SearchContainer,
  SearchInput,
  SearchLabel,
} from './FilterSearch.styled';

export default function FilterSearch({ value, onChange }) {
  const searchId = nanoid();
  return (
    <SearchContainer>
      <SearchLabel htmlFor={searchId}>Find contact by name</SearchLabel>
      <SearchInput
        id={searchId}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
      />
    </SearchContainer>
  );
}
