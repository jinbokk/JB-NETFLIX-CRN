import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies.js";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 3개의 page 필요 (homePage, moviePage, movieDetail)
// 2. homePage 에서는 배너를 볼 수 있다.
// 3. 3가지 섹션의 영화를 볼 수 있다 (popular,top rated, upcoming)
// 4. 각 영화에 hover 이벤트시 {제목, 장르, 점수, 인기도, 청소년관람여부} 를 볼 수 있다.
// 5. 영화 목록들을 슬라이드로 넘기며 볼 수 있다.
// 6. movieDetail 페이지에서 영화에 대한 정보를 볼 수 있다. {포스터, 제목, 줄거리, 점수, 인기도, 러닝타임.. 등등}
// 7. 트레일러 버튼을 누르면 Youtube로 예고편을 볼 수 있다.
// 8. 영화의 리뷰를 볼 수 있다.
// 9. 관련 영화를 볼 수 있다.
// 10. 영화 검색을 할 수 있다.
// 11. 조건에 따라 필터링하여 영화를 정렬 할 수 있다.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
