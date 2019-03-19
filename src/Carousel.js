import React, {Component} from 'react';
import Slider from 'react-slick'


export default class Carousel extends Component {
  constructor(props){
    super()

    this.state={
      items: props.items,
      autoplay: props.auto
    }
  }

  play = () => {
    this.slider.slickPlay();
  }

  componentDidMount() {
    if(!this.state.autoplay){
      setTimeout(()=> {
        this.play()
      }, 1750)
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: this.state.autoplay,
      autoplaySpeed: 3500
    }

    return (
      <div className='slider'>
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {this.state.items.map((x, ind)=> <div key={'caro' + ind + x.altText[0]}><img src={x.src} alt={x.altText}/></div>)}
      </Slider>
    </div>
    );
  }
}