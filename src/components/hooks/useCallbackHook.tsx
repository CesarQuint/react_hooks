import React, { useState, useCallback, ChangeEvent, FC } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      onSearch(event.target.value);
    },
    [onSearch]
  );

  return <input type="text" value={query} onChange={handleQueryChange} />;
};

export default SearchBar;
