export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        name="search"
        placeholder="Search..."
      />
    </>
  );
}
