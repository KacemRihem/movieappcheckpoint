import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Search';
import Movielist from './Movielist';
import AddMovie from './AddMovie'

function App() {
  const[movieList, setmovies]=useState([
    {
      title: "Eurovision Song Contest: The Story of Fire Saga",
      rating: 3,
      description: "Will Ferrell and Rachel McAdams play two hapless Icelandic contestants at the annual European competition of kitschy disco music. The real attraction here, however, is how accurately and lovingly the filmmakers have re-created the world of Eurovision, complete with hilarious pop songs. The heightened melodramatic atmosphere of emotional, go-for-broke performance helps sell Ferrell’s comic antics as well as the protagonists’ sure-to-be-thwarted big dreams. The result is surprisingly moving, with a soundtrack that will surely become a karaoke favorite — if we ever have karaoke again.",
      image: "https://pyxis.nymag.com/v1/imgs/449/835/04cbf5d2241dbcb75a30b549437855d4ca-eurovision-review.rhorizontal.w700.jpg"
    },
    {
      title: "Palm Springs",
      rating: 4,
      description: "One of the underdiscussed pleasures of this ebullient romantic comedy from Max Barbakow is that it knows exactly when to cut away from a joke. A montage of time-loop hookups becomes uproarious because of the precise windows we get on each; a night spent doing cocaine with a stranger is summed up in perfect snapshots of druggy mischief and maudlin obliteration. Andy Samberg and Cristin Milioti are wonderful together as a pair of wedding guests stuck in time, doomed to loop the same day over and over again, Groundhog Day style. But what makes the movie work so well, apart from the comedic charms of its leads.",
      image: "https://pyxis.nymag.com/v1/imgs/828/189/a9119db16383f9464cca5c2132ede21668-0702-critics-palmsprings.rhorizontal.w700.jpg"
    },
    {
      title:"Cuties",
      rating:4,
      description:"French-Senegalese director Maïmouna Doucouré’s touching, observant coming-of-age drama, about an 11-year-old Muslim girl from a devout background who joins an all-girl dance group, recently found itself at the center of controversy when a poster seemed to sexualize its young characters. But the movie itself is not exploitative in the least. To our hero, Amy (Fathia Youssouf Abdillahi), the “Cuties” — a quartet of popular girls at school who strut through the corridors in age-inappropriate clothing, act like grown-ups, and practice their dance moves for an upcoming competition — represent liberation and belonging.",
      image:"https://pyxis.nymag.com/v1/imgs/13c/83b/0110cc2b30c2b911a45151bbf5ec3008d1-cuties.rhorizontal.w700.jpg"
    }
  ])
  return (
    <div className="App">
      <Search />
      <Movielist movieList={movieList} />
      <AddMovie />
    </div>
  );
}

export default App;
