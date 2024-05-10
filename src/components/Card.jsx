function Card(props) {
  let data = props.data;
  let poster = data.Poster;
  let plot = data.Plot;
  let title = data.Title;
  let genre = data.Genre;
  let lang = data.Language;
  let actors = data.Actors;
  let year = data.Year;
  let runtime = data.Runtime;
  let rating = data.imdbRating;
  return (
    <div className="flex items-center justify-center flex-col w-[1200px] min-h-screen bg-white p-10 mt-5 rounded-xl shadow-2xl bg-opacity-80">
      <div className="h-fit w-fit shadow-4xl mt-5">
        <img
          src={poster}
          alt="poster"
          className="rounded-xl border-4 border-yellow-700"
        ></img>
      </div>
      <div className="flex gap-5 font-medium mt-8 text-2xl">
        <div>{title}</div>
        <div>({year})</div>
      </div>
      <div className="w-full bg-violet-900 h-[4px] my-5 rounded-lg"></div>
      <div className="w-full flex justify-between mt-5 font-medium">
        <div>Runtime: {runtime}</div>
        <div>Rating(imdb): {rating}</div>
      </div>
      <div className="text-left w-full mt-5 font-medium ">
        <div>Actors: {actors}</div>
      </div>
      <div className="font-medium text-left mt-5 w-full">Genre: {genre} </div>
      <div className="font-medium text-left mt-5 w-full">Language: {lang} </div>
      <div className="mb-10 text-left w-full mt-5 font-medium">
        Plot: {plot}
      </div>
    </div>
  );
}
export default Card;
