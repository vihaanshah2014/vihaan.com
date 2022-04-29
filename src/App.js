import './App.css';
import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import "aos/dist/aos.css";
import pythons from './Python-Symbol.png';
import alll from './all.png'




function App() {
  AOS.init();

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
  return (
    
    <div className="App">
	  <Spline class="backdrop" scene="https://draft.spline.design/ctanPEDEFgX-Gkc9/scene.spline" />
    <div class="header">
      <p class="text-rainbow-animation">Vihaan Shah</p>
    </div>

    <div data-aos="fade-up"
     data-aos-duration="5000"
     data-aos-delay='50'>
      <p class="insides">
      Hi, my name is Vihaan Shah. I am a hard-working and fearless high school student with a consistent
track record of exceptional academic results, maintaining a 3.9 GPA, 2 club board positions,
participation in 6 clubs, including an induction into Math Honors Society. With my focus greater
than just school, I have also taken steps outside of school by taking courses online as well as a
Middlesex County College course to dive deeper into my interests. I have intermediate-level
programming skills gained over the self-taught courses in HTML, CSS, Java, Javascript, and Python.
      </p> 
      <img class="images" src="https://source.unsplash.com/400x350/?landscape" />
    </div>


    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="5000">
    <p class="insides2">
      My life is not only focused on education and I deeply enjoy getting “real-world” experiences. 
      My work experience includes volunteering at NJ Stem summer camps where I worked as a teacher as well as a manager of new volunteers, 
      reporting daily to the director of the camps. I had the opportunity to teach game design as well as robotics across different difficulties
      based on age. I was also able to get more volunteers under me and manage them to teach classes, teaching them their projects ahead of time. 

      </p> 
      <img class="images2" src="https://source.unsplash.com/400x300/?landscape" />
     
    </div>

    <div class="header2">
      <p>Languages</p>
    </div>
      
    <div
    data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="5000">
      <img class="aa" src={pythons}/>
      <img class="aaa" src={alll}/>
    </div>

    <div class="header2">
      <p>Projects</p>
    </div>
    

    
    
    </div>

  
  );
}

export default App;
