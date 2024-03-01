import searchgithubuser from "../assets/searchgithubuser.png"
import animes from "../assets/animes.jpg"
import alquiler from "../assets/alquiler.png"
import Movies from "../assets/Movies.png"
import react from "../assets/react.svg"
import vue from "../assets/vue.svg"
import cSharp from "../assets/cSharp.svg"
import tailwind from "../assets/tailwind.svg"

const projectsInfo = [
  
  {
    name: "GitHub User Searcher",
    SourceCode: "https://github.com/Carlos-Mangandi/UserGitHub",
    LiveDemo: "https://searcherusersgithub.netlify.app/",
    img: searchgithubuser,
    technologies:[react,tailwind]
  },
  {
    name: "Filters Animes",
    SourceCode: "https://github.com/Carlos-Mangandi/FiltrosAnimes",
    LiveDemo: "https://filteranime.netlify.app/",
    img: animes,
    technologies:[vue,tailwind]
  },
  {
    name: "Rent Control",
    SourceCode: "https://github.com/GodBloody7/controldealquiler",
    LiveDemo: "https://searcherusersgithub.netlify.app/",
    img: alquiler,
    technologies:[react,tailwind]
  },
  {
    name: "Peliculas CFHN",
    SourceCode: "https://github.com/Rafa-X0/PeliculaCFHN",
    LiveDemo: "https://searcherusersgithub.netlify.app/",
    img: Movies,
    technologies:[cSharp,tailwind]
  },
  
];
export { projectsInfo };
