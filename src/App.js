import './App.css';
import {Navbar} from './components'
import {Header, Footer, Testimonial, Pricing, Benefit, Partner} from './container'

const  App = ()  =>{
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Benefit />
      <Pricing />
      <Testimonial />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
