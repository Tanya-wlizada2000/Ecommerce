
import "./headerBanner.css"; // Importing CSS styles for the header banner





function Responsive() {
  

  return (
   <>
     <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source src="Видео WhatsApp 2024-09-12 в 01.18.58_8c3c5316.mp4" type="video/mp4" className="video"  />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>With 11 Years Experience Flexible Packaging</h1>
        <h1>DOY PACK, Your Reliable Packaging Supplier</h1>
      </div>
    </div>
   </>
  );
}

export { Responsive }; // Exporting the Responsive component
