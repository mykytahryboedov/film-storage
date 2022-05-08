
interface IHeaderProps{
  searchQuery: string;
  setSearchQuery: string;
}

 const Header: React.FC<IHeaderProps> = ( searchQuery, setSearchQuery ) => {
  return (
    <div>
        <h1>Film Storage</h1>
        <a href="">Main Page</a>
        <a href="">Upload film</a>
        <div>
            {/* <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search..."/> */}
            <button>Search</button>
        </div>
    </div>
  )
}
export default Header