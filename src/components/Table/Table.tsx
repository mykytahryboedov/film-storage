import IMovie from '../../Types/Types';

interface IMoviesProps {
  movies: IMovie[];
  sort: (movies: IMovie[]) => void;
  remove:(id: number)=> void;
}

const Table: React.FC<IMoviesProps> = ({ movies, remove, sort }) => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name <button onClick={() => sort(movies)}>sort</button></th>
          <th>Release</th>
          <th>Format</th>
          <th>Actors</th>
          <th>Operation</th>
        </tr>
        </thead>
        <tbody>
        {movies.map((element, index) => (
            <tr key={element.id}>
            <td> {index+1}</td>
            <td> {element.filmName}</td>
            <td> {element.releaseDate}</td>
            <td> {element.format}</td>
            <td> {element.actorList.join(', ')}</td>
            <td>
                <button>Edit</button>
                <button onClick={() =>remove(element.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
