//import Header from './components/Header/Header'
import Table from './components/Table/Table';
import Upload from './components/Upload/Upload';
import Footer from './components/Footer/Footer';

import IMovie from './Types/Types';
import { useMemo, useState } from 'react';

const DB : IMovie[] = [
  {
    id: 1,
    filmName: 'Titanic',
    releaseDate: 1997,
    format: 'VHS',
    actorList: ['Robert De Niro', 'Jack Nicholson', 'Marlon Brando'],
  },
  {
    id: 2,
    filmName: 'Sonic',
    releaseDate: 2005,
    format: 'DVD',
    actorList: ['Denzel Washington', 'Katharine Hepburn', 'Humphrey Bogart'],
  },
  {
    id: 3,
    filmName: 'Home Alone',
    releaseDate: 1987,
    format: 'DVD',
    actorList: ['Jack Nicholson', 'Katharine Hepburn', 'Humphrey Bogart'],
  },
  {
    id: 4,
    filmName: 'Jumanji',
    releaseDate: 2006,
    format: 'DVD',
    actorList: ['Jack Nicholson', 'Katharine Hepburn', 'Humphrey Bogart'],
  },
];




function App() {

  const [movies, setMovies] = useState<IMovie[]>(DB)
  const [sortedMovies, setSortedMovies] = useState<IMovie[]>(DB)
  const [isSorted, setIsSorted] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('') 
  
  const sortedPosts = useMemo(() => {
    if (sortedMovies){
      return [...movies].sort((a,b)=> a.filmName.localeCompare(b.filmName))
    }
    return movies
  }, [sortedMovies, movies])

  const removeFilm = (id: number) => {

    let filtered = sortedMovies.filter(movie => movie.id !== id)

    setSortedMovies(filtered)
    setMovies(filtered)
  }    

  const sortedAndSearchedMovies = useMemo(()=>{
    return sortedMovies.filter(movie =>  movie.actorList.some(actor => actor.includes(searchQuery)) )
  },[searchQuery, sortedMovies])

  const sortFilm = (array: IMovie[]) =>{
    setSortedMovies(
     !isSorted ? sortedPosts : movies
      )
    setIsSorted(!isSorted)
  }
  

  return (
    <div className="App">
      <div>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search..."/>
      </div>
      <Upload/>
      <Table movies={sortedAndSearchedMovies} remove={removeFilm} sort={sortFilm}/>
      <Footer/>
    </div>
  );
}

export default App;
