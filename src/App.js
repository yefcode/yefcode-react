// import LoadScreen from './components/LoadScreen'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import ScrollToTop from './components/ScrollToTop'

const App = () => {

  // $("#button-scroll-top").on("click", function () {
  //   window.location.href = "#";
  //   $(".nav-link.active").removeClass("active");
  //   $('a[href="#"]').addClass("active");
  // });

  // navbarUpdate //TODO ALREADY IMPLEMENTED IN NavBar
  // const navbar = document.querySelector("#navbar"); // I already change this one
	// const scrollPos = $(document).scrollTop(); // TODO change this one

	// const scrollDynamic = $(".navbar-transition");
	// scrollDynamic.toggleClass("scrolled", scrollPos > navbar.clientHeight);

    // $(document).scroll(function () {
    //     const scrollPos = $(document).scrollTop();
    //     navbarUpdate();
    
    //     if (scrollPos > 400) {
    //         $("#button-scroll-top").css("display", "block");
    //     }
    //     else {
    //         $("#button-scroll-top").css("display", "none");
    //     }
    // });

  return (
    <>
      {/* <LoadScreen className=""/> */}
      <NavBar className=""/>
      <About className=""/>
      <Projects className=""/>
      <Contact className=""/>
      <Footer className=""/>
      {/* <button className="button-scroll-top"title="Go to top">Top</button> */}
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;
