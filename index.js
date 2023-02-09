// creating image slider

let flag = 0;
function controller(x) {
  flag = flag + x;
  slideshow(flag);
}
function slideshow(num) {
  // console.log(num)
  let slides = document.querySelectorAll(".slide");
  if (flag == slides.length) {
    flag = 0;
    num = 0;
  }
  if (flag < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}
setInterval(() => {
  slideshow((flag = flag + 1));
}, 5000);

let contentflag = 0;
function controllerflag(x, ele) {
  let columns = ele.parentElement;
  let num = ele.parentElement.style.left.slice(0, -1);
  if (x == -25) {
    num = Number(num) + x;
    columns.style.left = `${num}%`;
    columns.style.overflow = "visible";
    columns.style.transition = "0.35s";
    ele.style.display = "none";
    ele.previousElementSibling.style.display = "block";
  } else {
    num = Number(num) + x;
    columns.style.left = `${num}%`;
    columns.style.overflow = "visible";
    columns.style.transition = "0.35s";
    ele.nextElementSibling.style.display = "block";
    ele.style.display = "none";
    columns.style.overflow = "hidden";
  }
}



// creating image slider next products

let jselec=document.querySelector(".jselec");
let jsbeauty=document.querySelector(".jsbeauty");
let jsvalen=document.querySelector(".jsvalen");
let jscool=document.querySelector(".jscool");
let obj3={
  best_of_electronics:{
    Monitors:["./images/img1.webp","From 5999","acer"],
    Monitor:["./images/img2.webp","From ₹9999","SAMUSANG"],
    Printers:["./images/img3.webp","From ₹3999","HP"],
    Best_of_Hair_Dryers:["./images/img4.webp","From ₹549","realme,Philips & more"],
    Top_Deals_of_camera_Accessories:["./images/img5.webp","Shop Now","mi, realme"],
    Best_of_shavers:["./images/img6.webp","From ₹1649","Philips % Havells"],
    Premium_PowerBanks:["./images/img7.webp","Shop Now","Mi,realme &"]
  },
  beautyproducts:{
    Coffee_Powder:["./images/imageb.webp","Upto 80% Off","Nescafe,Continental & More"],
    Remote_Contro_Toys:["./images/imageb2.webp","Upto 80% Off","Buy Now!"],
    Rider_Helmets:["./images/imageb3.webp","From 699","Vega, Steelbird,HRX and more"],
    Studio_Headphones:["./images/imageb4.webp","Upto 80% Off","Explore Now!"],
    Premium_nongeared_cycles:["./images/imageb5.webp","Upto 40% Off","Hercules,hero & More"],
    Cycles_Accessories:["./images/imgb8.webp","From ₹125","Best Deals"],
    Tea_Powder:["./images/image1.1.webp","Upto 75% Off","Tata,Lipton & More"]
  },
  shop_for_valentains:{
    Wearable_Smart_Devices:["./images/va1.webp","Upto 40% Off"],
    Handbags:["./images/va2.webp","Upto 80% Off"],
    jewellery:["./images/va3.webp","Artificial jewellery"],
    Wrist_Watches:["./images/va4.webp","Upto 80% Off"],
    Lipstick:["./images/va5.webp","Upto 40% Off"],
    Makeup:["./images/va6.webp","From ₹125"],
    Womens_Dresses:["./images/va7.webp","Upto 75% Off"]
  },
  shop_for_cool:{
    Womens_Night_Suits:["./images/co1.webp","Upto 40% Off"],
    Slippers_Flip_Flops:["./images/co2.webp","Upto 80% Off"],
    Duffel_Bags:["./images/co3.webp","Min 70% off"],
    Inverters_and_Accessories:["./images/co4.webp","Upto 80% Off"],
    Mens_caps:["./images/co5.webp","Upto 80% Off"],
    Mens_Boxers:["./images/co8.webp","Upto 70% Off"],
    small_bags:["./images/co7.webp","Upto 75% Off"]

  }
}


for(let news in obj3){
  function contents(news1,div){
    div.innerHTML+=`
    <div class="col2">
    <div class="img">
    <img src="${obj3[news][news1][0]}" alt="" />
            </div>
            <div class="description">
              <h2>${news1.replaceAll("_"," ")}</h2>
              <h2 id="rate">${obj3[news][news1][1]}</h2>
              <h2>${obj3[news][news1][2]}</h2>
            </div>
    </div> `
  }
  if(news=="best_of_electronics"){
    for(let news1 in obj3[news]){
      if(obj3[news][news1][2]==undefined){
        obj3[news][news1][2]=" "
      }
      contents(news1,jselec)
    }
  }
  else if(news=="beautyproducts"){
    for(let news1 in obj3[news]){
      if(obj3[news][news1][2]==undefined){
        obj3[news][news1][2]=" "
      }
      contents(news1,jsbeauty)
    }
  }
    else if(news=="shop_for_valentains"){
      for(let news1 in obj3[news]){
        if(obj3[news][news1][2]==undefined){
          obj3[news][news1][2]=" "
        }
        contents(news1,jsvalen)
      }
    }
    else{
      for(let news1 in obj3[news]){
        if(obj3[news][news1][2]==undefined){
          obj3[news][news1][2]=" "
        }
        contents(news1,jscool)
      }
    }

  }





/// creating Brand directory

  let obj={
    Most_searched_on_flipkart:`Flipkart Axis Bank Super Elite Credit card,Primebook Laptops,Bounce Infinity E1,Buy Laptop on EMIInfinix Zero Book Ultra,OPPO Reno8 5G,OPPO Reno8 Pro 5G,Fresh Flower BouquetBouquet,Infinix ZERO BOOK ULTRA Series Laptop,Sell Old Mobile Phones,Premium Laptops,Electronics Store,Phone cover,Vivo Y33T,OPPO Reno7 5G,Okaya Electric Vehicles,bgauss electric scooter,OPPO Reno7 Pro 5G,iPhone 13,iPhone 13 Pro,iPhone 13 Pro Max,iPhone 13 Mini,Google Pixel 6a covers,Flipkart Quick,Ampere Magnus,Flipkart Help Centre,Online Boat Store,Covers from Rs 99,Flipkart Track Orders,Flipkart Manage Orders,Flipkart Return Orders,Flipkart Gift Cards Store,Flipkart Axis Bank Credit Card,Flipkart Pay Later`,
MOBILES:`iPhone 12 64GB,iPhone 12 Pro 512GB,iPhone 12 128GB,Vivo Y91i,Vivo Y11,Vivo Y15,Vivo Y50,Vivo Y12,Reno2 F,Oppo A12,Oppo F15,Oppo A31,Samsung A71,Samsung A51,Samsung A31,Realme X2,iPhone 11,iPhone 11 Pro,Mobile Cover,Mobile Offers,iphone x4G Mobile,Nokia Mobile,Samsung Mobile,iphone,Oppo Mobile,Vivo Mobile`,
CAMERA:`GoPro Action Camera,Nikon Camera,Canon Camera,Sony Camera,Canon DSLR,Nikon DSLR`,
LAPTOPS:`MacBook Pro M2,Premium Laptop,acer Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 11 Home) Z2-493 Thin and Light Laptop,ASUS Vivobook S14 OLED (2022)ASUS Zenbook 14 OLED (2022)Realme Book Prime Core i5 11th Gen,Microsoft Surface Go Pentium 128GB,Branded Laptops,Apple Laptops,Acer Laptops,Lenovo Laptops,Dell Laptops,Asus Laptops,HP Laptops,Gaming Laptops2 in 1 LaptopsLaptops,Dell latest laptops 2022,HP latest laptops 2022,Infinix INBook X1 Neo Series Celeron Quad Core - (8 GB/256 GB SSD/Windows 11 Home) XL22 Thin and Light Laptop,Microsoft Laptops12th Gen Intel Core Laptops`,
TVS:`Nokia TVPanas,onic TVThomson TV,Vu TV,Realme TV,Motorola TV,OnePlus TV,sLG TV,TVSony TV,Samsung TV,Android TelevisionIffalcon Tv,Mi TV`,
LARGE_APPLIANCES:`TV & Appliances End of Season Sale,Television,Washing Machines,Refrigerators,Air Conditioners,Electric Cookers,Electric Jug(Heater) / Travel Kettles,Induction Cooktops,Inverters / stabilizerIrons / Iron Box,Mixer Grinder Juicer,Wet Grinders,Chimneys,Microwave Ovens,Vacuum Cleaners,Water Purifier,FanMarQ Customer Care`,
CLOTHING:`Men Shirts,Kurta Pajama,KurtasMen T-Shirts,Jeans,Saree,Dresses,Kids Dresses,Designer Salwar Suits,BraDesigner Kurtis,Track PantMen Kurtas,Gym Wear,Party Dresses,Palazzo Suits,Boys Clothing,GlovesNighty,Maxi Dresses,Anarkal,iGowns,Culottes,Salwar Suits,Kurtis,Designer Sarees,Leggings,Shorts,Georgette Sarees,Ethnic Wear,Briefs & Trunks,Nike Watches,Ascot Tie,Corset Tops Tunics,Leather PU Skirts,Corset tops camisoles,Women magenta earrings,No collar jackets,Green dress material,Black patiala kurta set,Men camel shoes casual,Black pathani,Tassel Sarees,Khaki dresses,Kids formal dresses,Mauve shirts,Women henleyuppada pattu sarees,Leopard dresses,Sleeveless shrugs`,
FOOTWEAR: `ShoesAdidasShoes,Reebok Shoes,Nike Shoes,Puma Shoes,Boots,Bata ShoesWoodland Shoes,Skechers Shoes,Sneakers,Womens Boots,Sports Shoes,Loafers,Sandals,Lotto Sports Shoes,Casual Shoes,Womens Skechers Shoes,Asics Sports Shoes,Formal Shoes,School Shoes`,
GROCERIES:`PhonePe Grocery Voucher,Hand Wash,Soap,Cashew Nuts,Sunflower Oil,Eggs,Toilet Cleaner,Harpic Toilet Cleaner,Dettol Soap,Mustard Oil,Biscuits,Cheese,Patanjali Atta,Fortune Oil,Aashirvaad AttaTea`,
BEST_SELLING_ON_FLIPKART:`Fire-Boltt Ninja Calling Pro Bluetooth Calling Smartwatch 1.69 inch HD Display Smartwatch,Best Gas Geyser,Kitchen Geyser,Nutri Blenders,Portable Air Cooler,Best Air CoolerBags,Hitachi Refrigerator 3 Door,Books,Toys,Candles,HelmetsWall ClocksBaby FoodC,hocolates,Cycles,Calculators,Lipsticks,MaskVertiv UPS,Fastrack Watches,Wallets,Earrings,Gold Coins,Realme Pad MiniHandbags,conekt SW2 Smartwatch,Mivi DuoPods a350Speaker Cleaner`,
FURNITURE:`Furniture,Sofas,Beds,Dining sets,Wardrobes,Mattresses,TV Units,Tables,Chairs,Shelves,Bean Bags,Office Chairs,Computer Table,Office Tables,Red Sofa,Wakefit Beds,White Sofa,Wakefit Mattress,Green Sofa,Black Sofa,Brown Sofa`,
BGMH: `WheyProtein,Homeopathy,Bounce Infinity,Valentine Gift for Boyfriend,Valentine Gift for Girlfriend,Valentines Day Gifts,Christmas Gifts,Calendar 2023,Online Guitar,Books Store,Musical Instrument Store,Dabur Chyawan,prash,Baidyanath Chyawanprash,Energy Drinks,ToysMilk Drink MixesRakhi,ChyawanprashIndian Flag,Protein Supplements`
}
let directory_content=document.querySelector(".directory_content");
for(let i in obj){

   let str=obj[i].split(",")
   directory_content.innerHTML+=`
   <div class="span ${i}" style="margin: 3px 0;">
    <span>
     ${i.replaceAll("_"," ")}:
    </span>
   </div>`
   let key=document.querySelector(`.${i}`)
   str.map((ele)=>{
   key.innerHTML+=`<a href="">${ele}</a>`
  })

}
let obj2={
  ABOUT:`About Us,Careers,Flipkart Stories,Press,Flipkart Wholesale,Corporate Information`,
  HELP:`Payments,Shipping,Cancellation & Returns,FAQ,Report Infringement`,
  POLICY:`Return Policy,Terms Of Use,Security,Privacy,Sitemap,EPR Compliance`,
  SOCIAL:`Facebook,Twitter,YouTube`,
  Mail_Us:`Flipkart Internet Private Limited,Buildings Alyssa Begonia &,Clove Embassy Tech Village,Outer Ring Road Devarabeesanahalli Village,Bengaluru 560103,Karnataka India`,
  Registered_Office_Address:`Flipkart Internet Private Limited,Buildings Alyssa Begonia &,Clove Embassy Tech Village,Outer Ring Road Devarabeesanahalli Village,Bengaluru 560103,Karnataka India,CIN : U51109KA2012PTC066107,Telephone: 044-45614700`

}
let section=document.querySelector(".section1");
for(let i in obj2){
  let str=obj2[i].split(",")
  section.innerHTML+=`
  <div class="contain_item ${i}">
  <h1 style="font-family: Roboto,Arial,sans-serif;">${i.replaceAll("_"," ")}</h1>
</div>
  `
  let contain_item=document.querySelector(`.${i}`);
  str.map((ele)=>{
contain_item.innerHTML+=`
<a href="">${ele}</a>

`
  })
}