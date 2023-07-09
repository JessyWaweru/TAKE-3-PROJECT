
function Searchbar({ setSearchValue, handleSearch }) {
    return (
      <>
        <input
          placeholder="search events"
          className="flex-1 outline-none"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}></button>
      </>
    );
}
export default Searchbar;