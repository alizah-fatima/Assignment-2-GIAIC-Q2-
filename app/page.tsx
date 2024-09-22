import About from "./components/about";
import Header from "./components/header";

export default function Home (){
  return (
    <div>
      <h1>
        This is a Homepage!
      </h1>
      <Header/>
      <About/>
    </div>
  )
}
