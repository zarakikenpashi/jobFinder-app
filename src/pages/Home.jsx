import Companies from "../components/Companies"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LatestJob from "../components/LatestJob"
import LookingTalent from "../components/LookingTalent"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
        <div className="h-screen">
          <Navbar />
          <Hero />
        </div>
        <LatestJob />
        <Companies />
        <LookingTalent />
        <Footer />
    </>
  )
}

export default Home