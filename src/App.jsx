import React from "react";
import Navbar from "./Components/Navbar";
import Intersection from "./Components/Intersection";
import Measurements from "./Components/Measurements";
import ChartDetails from "./Components/ChartDetails";

const App = () => {
  return (
    <main>
      <Navbar />
      <Intersection
        imageUrl="/images/desktop_computer.jpg"
        hrefUrl="#components"
        title="Tu PC ideal a unos clicks de distancia"
        subtitle="PC Buffet realiza una comparación de entre una amplia base de datos
            con los componentes que se encuentran en el mercado, encontrando los
            adecuados para tus necesidades y presupueto."
      />
      <Measurements />
      <Intersection
        imageUrl="/images/video_edition.jpg"
        hrefUrl="#graphic-example"
        title="Lorem Ipsum"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit tempus ex, molestie euismod nunc gravida et. Quisque id lorem quis arcu ultrices tempor et eget dui. Mauris laoreet ante ut magna blandit, sit amet accumsan leo volutpat. Integer consequat."
      />
      <ChartDetails title="exampleChart" />
    </main>
  );
};

export default App;
