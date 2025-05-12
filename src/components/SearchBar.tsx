import { useState } from 'react';
import './SearchBar.css';
import SearchButton from './Searchbutton'; // asegúrate que la ruta sea correcta

interface SearchBarProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Buscar..." }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="login-form-input-field searchbar-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div className="searchbar-icon">
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchBar;

