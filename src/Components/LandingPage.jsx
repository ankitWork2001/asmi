import About from "./About"
import Banner from "./Banner"
import Cashback from "./Cashback"
import Categories from "./Categories"
import Collection from "./Collection"
import FAQ from "./FAQ"
import Hero from "./Hero"
import Offer from "./Offer"
import Popular from "./Popular"
import Share from "./Share"
import Steps from "./Steps"
import Testinomial from "./Testinomial"
import TopStores from "./TopStores"

const LandingPage = () => {
  return (
    <div>
         <Hero/>
         <TopStores/>
         <Categories/>
    <Steps/>
    <Collection/>
    <Cashback/>
    <Popular/>
    <Banner/>
    <Offer/>
    <About/>
    <Testinomial/>
     <FAQ/>
     <Share/>
    </div>
  )
}

export default LandingPage