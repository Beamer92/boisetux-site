import React, {Component} from 'react';
// import { UncontrolledCarousel } from 'reactstrap';
import Slider from 'react-slick'

// export default function Carousel(props){
//   // console.log(props.items)
//   // return(
//   //     <UncontrolledCarousel items={props.items} pause={'hover'} /> 
//   //   )


// }

export default class SimpleSlider extends Component {
  constructor(props){
    super()

    this.state={
      items: props.items
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='slider'>
      <Slider {...settings}>
        {this.state.items.map(x=> <div><img src={x.src} alt={x.altText}/></div>)}
      </Slider>
    </div>
    );
  }
}