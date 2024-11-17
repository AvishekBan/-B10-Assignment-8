import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet";

const Home = () => {
   return (
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Home-Gadgets Heaven</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <Banner></Banner>
         <Gadgets></Gadgets>
      </div>
   );
};

export default Home;
