import 'bootstrap/dist/css/bootstrap.css';

const fetchPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=25349d5497c8655f081fc1abfbd5aa08&language=es-ES&page=1`
    );
    return await respuesta.json();
    // Si la respuesta es correcta
    if (respuesta.status == 200) {

      
    }
    return
  } catch (error) {
    console.log(error);
  }
};

const CargarPeliculas =async() => {
    const peliculas=await fetchPeliculas();
    console.log(peliculas);
  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center text-white mt-5">Películas más populares</h2>
       <div className="row mt-5">
        {peliculas.results.map((p) => (
            <>
            <div className="card col-md-2 mt-2 mx-2 px-1">
                <div className="card-header ">
                <img class="poster" src={`https://image.tmdb.org/t/p/w500/${p.poster_path}`}/>

                </div>
                <div className='card-body mx-auto'>
                <h5>{p.title}</h5>
                      </div>
          </div>
          
            </>
        ))}
    </div>
    </div>
        
      
      
  )
}

export default CargarPeliculas
