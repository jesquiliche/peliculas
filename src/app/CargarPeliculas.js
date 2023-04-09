
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
      <div className="container-text col-lg-6 mx-auto mt-4">
      <h4 className="text-center text-white">Top 5 películas más populares</h4>
      </div>
      
       <div className="row mt-5">
        {peliculas.results.slice(0,5).map((p) => (
            <>
            <div className="card col-lg-2 m-2 mt-3 px-1">
                <div className="card-header text-center">
                <img class="poster" src={`https://image.tmdb.org/t/p/w500/${p.poster_path}`}/>

                </div>
                <div className='card-body mx-auto'>
                <h6>{p.title}</h6>
                      </div>
          </div>
          
            </>
        ))}
    </div>
    </div>
        
      
      
  )
}

export default CargarPeliculas
