import React from 'react';

import './Genres.css';


// "acoustic",
// "afrobeat",
// "alt-rock",
// "alternative",
// "ambient",
// "anime",
// "black-metal",
// "bluegrass",
// "blues",
// "bossanova",
// "brazil",
// "breakbeat",
// "british",
// "cantopop",
// "chicago-house",
// "children",
// "chill",
// "classical",
// "club",
// "comedy",
// "country",
// "dance",
// "dancehall",
// "death-metal",
// "deep-house",
// "detroit-techno",
// "disco",
// "disney",
// "drum-and-bass",
// "dub",
// "dubstep",
// "edm",
// "electro",
// "electronic",
// "emo",
// "folk",
// "forro",
// "french",
// "funk",
// "garage",
// "german",
// "gospel",
// "goth",
// "grindcore",
// "groove",
// "grunge",
// "guitar",
// "happy",
// "hard-rock",
// "hardcore",
// "hardstyle",
// "heavy-metal",
// "hip-hop",
// "holidays",
// "honky-tonk",
// "house",
// "idm",
// "indian",
// "indie",
// "indie-pop",
// "industrial",
// "iranian",
// "j-dance",
// "j-idol",
// "j-pop",
// "j-rock",
// "jazz",
// "k-pop",
// "kids",
// "latin",
// "latino",
// "malay",
// "mandopop",
// "metal",
// "metal-misc",
// "metalcore",
// "minimal-techno",
// "movies",
// "mpb",
// "new-age",
// "new-release",
// "opera",
// "pagode",
// "party",
// "philippines-opm",
// "piano",
// "pop",
// "pop-film",
// "post-dubstep",
// "power-pop",
// "progressive-house",
// "psych-rock",
// "punk",
// "punk-rock",
// "r-n-b",
// "rainy-day",
// "reggae",
// "reggaeton",
// "road-trip",
// "rock",
// "rock-n-roll",
// "rockabilly",
// "romance",
// "sad",
// "salsa",
// "samba",
// "sertanejo",
// "show-tunes",
// "singer-songwriter",
// "ska",
// "sleep",
// "songwriter",
// "soul",
// "soundtracks",
// "spanish",
// "study",
// "summer",
// "swedish",
// "synth-pop",
// "tango",
// "techno",
// "trance",
// "trip-hop",
// "turkish",
// "work-out",
// "world-music"

class Genres extends React.Component
{
    constructor(props)
    {
                  
              super(props);
    }
    
    render()
        return (
            <div className="GenreButtons">
            <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
        <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
        <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
        </div>
)
}