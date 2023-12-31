import React from 'react'
import { useState ,useEffect} from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'


import home1 from '../assets/Hom1.jpg'
import home4 from "../assets/ho4.avif"
import home5 from "../assets/ho5.avif"
import home8 from "../assets/hom8.avif"
import home6 from "../assets/hom6.jpg"
import home9 from "../assets/hom9.avif"
import hv1 from "../assets/hv1.mp4"
import Navbar from '../Nav/Navbar'
import Footer from '../Footer/Footer'

import home10 from '../assets/addtocart.gif'




export default function Home() {
  let arr=[home4,home5,home8];

  const [index,setIndex]=useState(0);

  useEffect(() => {
    setTimeout(()=>{
      if(index<arr.length-1){
        setIndex(index+1);
      }else{
        setIndex(0);
      }
    },2000)
  }, [index])

  return (
    <div className='wrap'>
      <Navbar/>
      <h2 className='head2'>
      JOIN THE BIGGEST GROCERY STORE !!
      </h2>
      <div className='body'>
          <div>
          <Link to='/shop'> <img src={arr[index]} id="slider"/> </Link>
          </div>

      </div>
      
      <div className='hom1'>
      <div className='babyshop'>
      {/* <h2 className='head1'>
      Toys and Games for Babies & Kids.
      </h2> */}
      <img src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=826&t=st=1690302675~exp=1690303275~hmac=3e1c241f7a91e5f1de038e5ccb58776741d53ea2251de7b91a949d156295c3f7 "/>
      <div>

      <h2 id='titlebaby'>
        Grocery of All Types
      </h2>

      <p id='babyp'>
      Organic Veggies play a crucial part in development of a child. Toys as simple as wooden blocks
       or numbered puzzle, develops cognitive and physical skills. Complex puzzles, remote 
       control cars, bubble guns helps learn and analyse cause effects and spatial relationships.
        Baby toys, rattles and bath toys enhances baby's attention and responses. Babies tend to
         play more and more with such toys and make themselves happy. Children's attitude towards 
         their toys nurtures them big way.
      </p>

      <button id='btnbaby' type='submit'>Shop Now</button>
      </div>
      </div>
      {/* <h2 className='head1'>
      Buy Toys Online like never before
      </h2>
      <p style={{textAlign:"center"}}>
      Choose to buy toys online and it will offer you widest range with features, specifications, 
      skill-set and use of toy. You are exposed to a variety of options of baby & kids toys from all 
      over world.
      </p> */}
     
      {/* <h2 className='head1'>
      Selecting a Toy for your Child from FirstCry's widest range

      </h2>
      <p>
      What makes baby and kids toys different is their design and structure.
       Baby toys are more simple toys to attract babies and encourage them to 
       respond by words or by action. Kids' toys however encourages children to
        imply logical, strategic and cause effect thinking pattern. It motivates
         children to adapt to new learning methods and toys.
      </p>
      
      <p>
      While selecting any type of toy for a kid, one has to consider age of the 
      child, gender and their basic behaviour. At a very early age, baby can be 
      introduced to rattles, clip on toys, cot mobiles and musical soft toys.
       During toddler stage, child can be introduced to bump and go toys, complex
        rattles, play mats, pull string cars, dolls & doll-houses and manual ride
         ons. Kids between 3 to 10 years of age prefer to get engaged in puzzles, 
         board games, sports, pool games, PC console games, pretend & role play 
         toys, blocks and construction sets and remote control toys. Children
          above 10 years of age prefer outdoor play equipment, sports equipment 
          and kits, console gaming, educational and learning toys & more. Needless
           to mention, children of any age love to have engaging activity toys.


      </p> */}
      {/* <div className='img1'>
        <img src="https://toycra.com/cdn/shop/files/PK30-15_1248x624.jpg?v=1631013699" style={{width:'800px',padding:'30px'}}/>
        <img src="https://toycra.com/cdn/shop/files/BO-05-06_1872x624.jpg?v=1613769851"style={{width:'800px',padding:'30px',marginLeft:'50px'}}/>
      </div> */}
      <h2 className='head1'>
      Online Grocery Store with a plethora of variety and brands
      </h2>
      {/* <p className='x'>
      FirstCry.com is a one-stop shop for a wide range of toys online for kids of all ages.
       Determined by their complexity and features one can buy these toys. We take care of all
        your needs and give you a perfect overview of what a certain toy features. FirstCry.com
         presents learning toys and games, family games, board games, pretend play toys and sets,
          action figures, robotic toys, simple soft toys, musical soft toys, die cast toys and collectibles 
          and a huge range of. With character toys and characters like - Spiderman, Minions, Superman, Mickey
           Mouse and Friends, Disney Princesses etc we make it easier for you to select a perfect option, be it 
           a toy for your lil boy or girl. One can chose from brands like - Hamleys, Mitashi, Fisher Price, Mee Mee,
            Funskool, Fab N Funky, Hot Wheels, Simba, Skillofun, Barbie & lot more. Feel the thrill and relive your  
            childhood while shopping for toys online at FirstCry.
      </p> */}
      </div>
      <video width="1800" height="800" autoPlay loop style={{marginLeft:"0%"}}>
      <source src={hv1} type="video/mp4"/>
      </video>
      <p></p>
      <p></p>
      {/* <img src="https://www.funcorp.in/cdn/shop/files/MobiKwik_4-1_1270x.jpg?v=1671519550" style={{width:'1800px'}}/> */}
    
   
      {/* <img src={home9} style={{width:"1800px"}}/> */}
      {/* <img src={home6} style={{width:"1800px"}}/> */}
      
      {/* <Link to='shop'><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_feeding_&_kids_food_090523_01.jpg"/></Link> */}

      <div className='ourbrands'>
        <div>
          <center><h2>Our Brands</h2></center> 
        </div>
        <img src='https://img.freepik.com/premium-photo/composition-with-variety-raw-organic-vegetables-wooden-table-kitchengenerative-ai_391052-23086.jpg?w=1060'></img>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9ssLdfAuubTtS1rXdpsj6JZjeXKS-GDSog&usqp=CAU'></img>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOpRi3waOuuN9cYNlgKhWkgOmpbdm9Hn9Dg&usqp=CAU'></img>
        <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1689163681sob.webp'></img>
        <img src='https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1672213649573X771_NERF.webp'></img>
      </div>
      
      
      <Footer/>
    </div>
    
  )
}
