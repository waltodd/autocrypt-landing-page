import './App.scss';
import {Navbar} from './components'
import {Header, Footer, Testimonial, Pricing, Benefit, Partner} from './container'

const  App = ()  =>{
  return (
    <div className="app">
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
