

//import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.css';

const fetchPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=25349d5497c8655f081fc1abfbd5aa08&language=es-ES&page=1`,
      {cache: 'no-store'}
    );
    return await respuesta.json();
    // Si la respuesta es correcta
    if (respuesta.status == 200) {
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

const CargarPopulares = async () => {
  const peliculas = await fetchPeliculas();
  
  return (
    <div className="container mt-3">
      

      <div className="row mt-5">
        {peliculas.results.map((p) => (
          <>
            <div className="card col-lg-2 mx-auto mt-3 px-1">
              <div className="card-header text-center">
                <img src={`https://image.tmdb.org/t/p/w154${p.poster_path}`} />
              </div>
              <div className="card-body mx-auto">
                <h6>{p.title}</h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CargarPopulares;
