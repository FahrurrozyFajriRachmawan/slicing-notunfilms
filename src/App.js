import "./App.scss";
// import "./assets/styles/LandingPage.css";
import NavigationBar from "./components/navigationbar/NavigationBar";
import HeaderSection from "./components/header/HeaderSection";
import MovieSection from "./components/main/MovieSection";
// import PopularSection from "./components/PopularSection";
// import TrendingSection from "./components/TrendingSection";
import LastWatchedSection from "./components/main/LastWatchedSection";

import imgUncharted from "./assets/images/uncharted-cinema.jpg";
import imgWakanda from "./assets/images/wakanda-cinema.jpg";
import imgEternals from "./assets/images/eternals-cinema.jpg";
import imgThor from "./assets/images/thor-cinema.jpg";
import imgDoctorStranger from "./assets/images/dr.stranger-cinema.jpg";
import imgAvatar from "./assets/images/avatar-cinema.jpg";
import imgSpiderman from "./assets/images/spiderman-cinema.jpg";
import imgSquidgame from "./assets/images/squidgame-cinema.jpg";
import imgVenom from "./assets/images/venom-cinema.jpg";
import imgAdam from "./assets/images/adam-cinema.jpg";
import imgBlackadam from "./assets/images/blackadam-cinema.jpg";
import imgShangchi from "./assets/images/shangchi-cinema.jpg";

function App() {
  return (
    <div>
      <div className="bg-header">
        <NavigationBar />
        <HeaderSection />
        {/* <PopularSection /> */}
      </div>

      <div className="bg-movie px-2" id="trending">
        <MovieSection titleSection="Trending Movie" />
        <MovieSection titleSection="Random Movie" />

        <div>
          <div className="wrapper-search">
            <div className="title-movie-section">Last Watched</div>
          </div>
          <div id="lastwatched">
            <LastWatchedSection
              titleSection="Last Watched"
              image={imgUncharted}
              title="Uncharted"
              date="2022"
              rate="8.5"
            />
            <LastWatchedSection
              image={imgWakanda}
              title="Wakanda Forever"
              date="2022"
              rate="8.5"
            />
            <LastWatchedSection
              image={imgEternals}
              title="Eternals"
              date="2022"
              rate="8.5"
            />
            <LastWatchedSection
              image={imgThor}
              title="Thor"
              date="2022"
              rate="8.5"
            />
            <LastWatchedSection
              image={imgDoctorStranger}
              title="Doctor Stranger"
              date="2022"
              rate="8.5"
            />
            <LastWatchedSection
              image={imgAvatar}
              title="Avatar"
              date="2022"
              rate="8.5"
            />
          </div>
        </div>
      </div>

      {/* <div className="main-content">
        <TrendingSection />
        <LastWatchedSection />
      </div> */}
    </div>
  );
}

export default App;
