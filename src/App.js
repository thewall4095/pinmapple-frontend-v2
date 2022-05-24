import './styles/Global.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import Helmet from "react-helmet";
import { useEffect, useState, lazy, Suspense } from "react";
import ReactTooltip from "react-tooltip";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(function () {
      setFontsLoaded(true);
      setTimeout(function () {
        setHideOverlay(true);
      }, 600);
    });
  }, []);
  return (
    <div className="App">
      <Helmet>
        <title>256 ART</title>
        <meta name="title" content="256 ART" />
        <meta
          name="description"
          content="The generative art platform for upcoming artists and the stories they have to tell."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://256art.com/" />
        <meta property="og:title" content="256 ART" />
        <meta
          property="og:description"
          content="The generative art platform for upcoming artists and the stories they have to tell."
        />
        <meta
          property="og:image"
          content="https://256art.com/assets/256ART/256ART.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://256art.com/" />
        <meta property="twitter:title" content="256 ART" />
        <meta
          property="twitter:description"
          content="The generative art platform for upcoming artists and the stories they have to tell."
        />
        <meta
          property="twitter:image"
          content="https://256art.com/assets/256ART/256ART.jpg"
        />
      </Helmet>
      <div
        className={
          "app-overlay " +
          (fontsLoaded ? " " : "font-loading ") +
          (hideOverlay ? " hide " : "")
        }
      >
        <p>...</p>
      </div>
      <BrowserRouter>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactTooltip class="tooltip" html={true} />
    </div>
  );
}

export default App;
