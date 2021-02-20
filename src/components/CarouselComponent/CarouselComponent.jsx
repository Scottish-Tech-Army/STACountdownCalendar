import Carousel from 'react-bootstrap/Carousel'
import './CarouselComponent.css' 
import ReactPlayer from 'react-player/lazy'



const CarouselComponent = ({content}) => {
    let showCarouselControls = true;

    if (content.length === 1) { 
        showCarouselControls = false
    }


return <Carousel controls={showCarouselControls} indicators={showCarouselControls}>
   
    {content.map((item, id) => (
        <Carousel.Item key={id}>
            {item["media-type"] === "image" ?    //if media-type is image then...
                <>
             <div className="img-wrapper">
        <img src={item["media-url"]} alt="A Carousel." />
        <div className="img-overlay"></div>
   
        </div>
     
        </>
            
        : <>                                   
        <div className ="vid-wrapper">  
            <ReactPlayer url = {item["media-url"]} height="100%" width="100%" />
            </div>
            </>  }
        </Carousel.Item>
    ))} 
    
   

        </Carousel>
}

export default CarouselComponent