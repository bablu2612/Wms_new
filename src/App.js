import { Outlet } from "react-router-dom";
import GlobelStyleCss from "./Globel.style";

import Layout from "./Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";

function App() {
  return (
    <>
      <GlobelStyleCss />
      <div className="App">
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </>
  );
}

export default App;
