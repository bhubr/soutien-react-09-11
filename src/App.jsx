import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import PersonDetails from './components/PersonDetails';

  // 1. Créer des composants "génériques"
// Navbar
// Banner (pour afficher une image et un titre)
// Footer (avec liens vers réseaux sociaux)
// Sidebar (barre latérale)
// 2. Créer un composant PersonDetails affichant les détails d'une personne:
//    firstName, lastName, email, avatar, age

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner
        title="Randoms flamants pink"
        img="https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress"
      />
      <PersonDetails
        firstName="David"
        lastName="Nelson"
        email="david.nelson@sfr.fr"
        avatar="https://randomuser.me/api/portraits/men/53.jpg"
        age="42"
      />
      <Footer />
    </div>
  );
}

export default App;
