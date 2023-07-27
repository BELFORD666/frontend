import React, { useEffect, useState } from 'react'
import Sho1 from '../../assets/Sho1.webp'
import Sho2 from '../../assets/Sho2.webp'
import sho3 from '../../assets/sho3.webp'
import sho4 from '../../assets/sho4.webp'
import sho5 from '../../assets/sho5.webp'
import sho6 from '../../assets/sho6.webp'
import sho7 from '../../assets/sho7.webp'
import sho8 from '../../assets/sho8.webp'
import sho9 from '../../assets/sho9.webp'
import sho10 from '../../assets/sho10.webp'
import shop11 from '../../assets/shop11.avif'
import "./Shop.css"
import { FcLike } from 'react-icons/fc';
import { BsFillShareFill } from 'react-icons/bs';
import home10 from "../../assets/hom10.avif";
import home11 from "../../assets/home11.jpg";
import Footer from '../../Footer/Footer'
import NavBar from '../../Nav/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { cartProducts, favProducts} from '../../Redux/actions/action'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import './MarqueeImage.css'; 


export default function Shop() {
  const dispatch=useDispatch();
  var [source,setSource]=useState([]);
  useEffect(() => {
      axios.get("http://localhost:8080/api/v1/auth/products")
      .then((res)=>{
        console.log(res)
        setSource(res.data)
      })
  }, [])

     source=[
        {"pid":1,"link":"https://www.bigbasket.com/media/uploads/p/s/1214489_4-britannia-treat-croissant-100-veg-cocoa-creme-roll-vanilla-creme-roll-2x45-g-each.jpg://www.bigbasket.com/pd/1202884/hersheys-milk-shake-chocolate-6x180-ml/?nc=bakery-cakes-dairy&t_pg=l1-bakery-cakes-dairy&t_p=bakery-cakes-dairy&t_s=bakery-cakes-dairy&t_pos=3&t_ch=desktop","category":"Building Kit/Toy","brand":"Lego","age":"3+","des":"Treat Crossiant","price":1150,"dprice":1025,"save":10},
        {"pid":2,"link":"https://www.bigbasket.com/media/uploads/p/s/40075537_5-fresho-onion.jpg://m.media-amazon.com/images/I/41TS30fYizL._SX300_SY300_QL70_FMwebp_.jpg","category":"Electric Toys","brand":"HotWheels","age":"6+","des":"Big Onion","price":1700,"dprice":1550,"save":9},
        {"pid":3,"link":"https://www.bigbasket.com/media/uploads/p/s/40218329_2-fresho-plum-indian.jpg","category":"peach","brand":"Lego","age":"6+","des":"peach","price":960,"dprice":850,"save":12},
        {"pid":4,"link":"https://www.bigbasket.com/media/uploads/p/s/20001176_14-fresho-litchi.jpg","category":"Puzzle Toys","brand":"Lego","age":"6+","des":"Litchi","price":3050,"dprice":2900,"save":5},
        {"pid":5,"link":"https://www.bigbasket.com/media/uploads/p/s/10000141_25-fresho-muskmelon-netted-small.jpg","category":"Muskmelon - Netted Small","brand":"Lego/Disney","age":"6+","des":"MuskMelon","price":1150,"dprice":1025,"save":10}, 
        {"pid":6,"link":"https://www.bigbasket.com/media/uploads/p/s/20000909_18-fresho-orange-imported.jpg","category":"Tower Sets","brand":"White Rabbit","age":"3+","des":"Fresh Orange","price":2870,"dprice":2750,"save":5},
        {"pid":7,"link":"https://www.bigbasket.com/media/uploads/p/s/208003_11-dettol-antiseptic-disinfectant-liquid.jpg","category":"Scooter","brand":"Toy R Us","age":"6+","des":"dettol antiseptic disinfectant liquid","price":1650,"dprice":1400,"save":15},
        {"pid":8,"link":"https://www.bigbasket.com/media/uploads/p/mm/1216033_2-gillette-mach-3-turbo-bladed-cartridges-10-pcs-classic-foam-shave-sensitive-418-g.jpg","category":"Toy Gun","brand":"Nerf","age":"6+","des":"gillette mach-3 turbo bladed cartridges 10 pcs classic foam shave sensitive","price":2600,"dprice":2470,"save":5},
        {"pid":9,"link":"https://www.bigbasket.com/media/uploads/p/mm/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg","category":"Toy Gun","brand":"Nerf","age":"6+","des":"gillette foam shave lathers quickly hydrates regular","price":2850,"dprice":2700,"save":6},
        {"pid":10,"link":"https://www.bigbasket.com/media/uploads/p/mm/242668_3-nandini-cooking-butter-unsalted.jpg","category":"Board Games","brand":"Wembley","age":"6+","des":"nandini cooking butter unsalted","price":1800,"dprice":1600,"save":12},
        {"pid":11,"link":"https://www.bigbasket.com/media/uploads/p/s/1202898_4-sofit-soya-drink-vanilla.jpg","category":"Soft Toys","brand":"Hamleys","age":"3+","des":"sofit soya drink vanilla","price":1500,"dprice":1350,"save":10}
        ] 

  return (
    <>
      <NavBar/>
    
      <img src={home10} alt="img" id="imges"/>
      <div className="marquee-container">
      <img src="https://cdn.fcglcdn.com/brainbees/banners/brandstrip1208-3-new-19-08-19.jpg" alt="Marquee Image" style={{marginBottom:"10px"}}/>
        <ToastContainer/>
    </div>
      <div className='products'>
        {source.map((product)=>
          <div className='product' key={product.pid}>
            <a onClick={()=>{
              dispatch(favProducts(product))
              toast.success("Added to favorites")
              }} id='share'><FcLike/></a>
 
              <img src={product.link} className='image'></img>
              <p>{product.des}</p>
              <div className='prices'>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save{product.save}%)</p>
                </div>
              <div className='btns'>
                <h2 className='btnshop' 
                onClick={()=>{
                  dispatch(favProducts(product))
                  alert("Added to favorite")
                }}
                >Add To Wishlist</h2>
                <h2 className='btnshop' 
                  onClick={()=>{
                    dispatch(cartProducts(product))
                    toast.success("Added to cart")
                  }}
                >Add To cart</h2>
              </div>
          </div>
        )}
      </div>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_132_desktop_moas_060723_30.jpg"/>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_gear_&_activity_090523_18.jpg"/>           
      <Footer/>
    </>
  )
}
