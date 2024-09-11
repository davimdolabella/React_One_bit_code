import Profile from "./components/Profile";
import image from './assets/image.jpg'
export default function App(){
  return(
    <div className="app">
      <Profile
        avatar={image}
        name="Davi Dolabella"
        bio="Futuro programador"
        email="davimdolabella.p@gmail.com"
        phone="+55 910217967"
        githubURL="https://github.com/davimdolabella"
        linkedinURL="https://linkedin.com"
        twitterURL="https://twiter.com"
      />
    </div>
  )
  
}