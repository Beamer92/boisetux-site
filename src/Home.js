import React, {Component} from 'react'
import Carousel from './Carousel'
import myData from './data/main.json'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
          homePage: {},
          rentals: [],
          tuxgear: []
        }
      }
    
      componentWillMount(){
        const mainData = myData
        this.setState({
          homePage: mainData.homePage,
          tuxgear: mainData.tuxgear,
          rentals: mainData.rentals
        })
      }

    render(){
        return (
            <div>
                <div className='container-fluid home'>
                <div className='row'>
                    <div className='col-md-3 lft order-2 order-md-1'>
                        <Carousel items={this.state.tuxgear} auto={true}/>
                        <a href='http://www.tuxgear.com' className='link redir'><img src='/imgs/bowtie.png' alt='bowtie redirect to rentals' className='bowtie'></img>Shop Our Warehouse!</a>
                    </div>

                    <div className='col-md-6  order-md-2'>
                        <img src={'/imgs/TuxShopLogo.png'} alt='Boise Tuxedo Shop logo' className='mainLogo'/>
                        <h2 className='title'>Boise Tuxedo Shop - Quality Tuxedo Rentals at Great Prices</h2>
                        <h5 className='desc'>{this.state.homePage ? this.state.homePage.intro : ''}</h5>
                        <div className='dlink'>Questions? <Link to='/contactus' className='link'> Contact Us or Come Visit!</Link></div>
                        
                    </div>
                    
                    <div className='col-md-3 rit order-3'>
                        <Carousel items={this.state.rentals} auto={false}/>
                        <Link to='/rentals' className='link redir'><img src='/imgs/bowtie.png' alt='bowtie redirect to rentals' className='bowtie'></img>Interested in Renting?</Link>
                    </div>

                </div>
                </div>
            </div>
        )
    }  
}
