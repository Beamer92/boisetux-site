import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export default function Carousel(props){
  console.log(props.items)
  return(
      <UncontrolledCarousel items={props.items} pause={'hover'} /> 
    )
}
