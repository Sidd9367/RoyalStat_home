import React from 'react';
import './App.css';
import chest_img from "./homechest.png";
import battle_img from "./homebattle.png";
import tournament_img from "./hometournament.png";

function App() {
  return (
    <div className="Homepage">
    <div className="App">
      <div className="home">
        <label className="home_label1">RoyalStats</label>
        <label className="home_label2">Eat Sleep Clash Repeat...</label>
             <select className="home_select1">
              <option value="Player">Player</option>
              <option value="Clan">Clan</option>
              </select>
              <input type="text" className="home_text1" placeholder="TAG #XXXXXX "></input>
              <button className=" home_button1 ">🔍 Search</button>
              </div>
  
         </div>      
   <div className="home_info">
   <label className="home_label3">Features</label>
   <div className="home_chest">
   <label className="home_label4">Upcoming Chest</label>
   <img src={chest_img} alt="" align="right"/>
   <p className="upcoming_chest" >  
   Wondering when that Legendary chest is coming? We got you covered.
   </p>
     </div>   
     <div className="home_tournament">
   <label className="home_label5">Tournament</label>
   <img src={tournament_img} alt=""  align="left"/>
   <p className="tournament">
   Wondering when that Legendary chest is coming? We got you covered.
   </p>
     </div>   
     <div className="home_battle">
   <label className="home_label6">Battle</label>
   <img src={battle_img} alt=""  align="right"/>
   <p className="battle">   
   Wondering when that Legendary chest is coming? We got you covered.
   </p>
     </div>   
     </div>       
    </div>
  
  );
}

export default App;
