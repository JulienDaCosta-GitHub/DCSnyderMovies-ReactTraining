import Fiche from './fiche.js';
import mos from './mos.jpg';
import bvs from './bvs.jpg';
import jl from './jl.jpg';

function App() {
  return(
  <div className="page">
    <h1>DC SnyderVerse</h1>
    <div className="interface">
      <Fiche 
        title="Man Of Steel" 
        date="19 juin 2013"
        description="Un petit garçon découvre qu'il possède des pouvoirs surnaturels et qu'il n'est pas né sur Terre. Plus tard, il s'engage dans un périple afin de comprendre d'où il vient et pourquoi il a été envoyé sur notre planète mais il devra devenir un héros s'il veut sauver le monde de la destruction totale et incarner l'espoir pour toute l'humanité."
        image={mos}
        />
      <Fiche
        title="Batman v. Superman"
        date="23 mars 2016"
        description="Craignant que Superman n'abuse de sa toute-puissance, le Chevalier noir décide de l'affronter : le monde a-t-il davantage besoin d'un super-héros aux pouvoirs sans limite ou d'un justicier à la force redoutable mais d'origine humaine ? Pendant ce temps-là, une terrible menace se profile à l'horizon."
        image={bvs}
        />
      <Fiche
        title="Zack Snyder's Justice League"
        date="2021"
        description="Bruce Wayne, inspiré par l'altruisme de Superman, sollicite l'aide de sa nouvelle alliée, Diana Prince, pour affronter un ennemi plus redoutable que jamais. Ensemble, Batman et Wonder Woman ne tardent pas à recruter de nouveaux éléments afin de bâtir une équipe capable de sauver la planète, de plus en plus menacée."
        image={jl}
        />
    </div>
  </div>
  )
}

export default App;