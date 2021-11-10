import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

export const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    //if (!window.location.href.includes("localhost")) {
    ReactGA.initialize(process.env.REACT_APP_GA_ID as string);
    //}
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
        console.log('page view', location.pathname + location.search)
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};
