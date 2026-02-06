const data = {
  rajasthan:{
    name:"Rajasthan",
    places:"Jaipur, Jodhpur, Udaipur, Jaisalmer, Chittorgarh, Sikar, Jhunjhunu",
    time:"October to March",
    cost:"Train ₹500–2000 | Bus ₹300–1500 | Hotel ₹800–3000",
    img:"rajasthan fort",
    ticket:"https://www.rajasthantourism.gov.in"
  },

  "uttar pradesh":{
    name:"Uttar Pradesh",
    places:"Taj Mahal, Varanasi, Ayodhya, Mathura",
    time:"October to March",
    cost:"Train ₹300–1500 | Bus ₹200–1000",
    img:"taj mahal",
    ticket:"https://uptourism.gov.in"
  },

  maharashtra:{
    name:"Maharashtra",
    places:"Mumbai, Lonavala, Ajanta Ellora",
    time:"October to February",
    cost:"Train ₹400–2000",
    img:"gateway of india mumbai",
    ticket:"https://www.maharashtratourism.gov.in"
  },

  kerala:{
    name:"Kerala",
    places:"Munnar, Alleppey, Wayanad",
    time:"September to March",
    cost:"Train ₹500–2500",
    img:"kerala backwaters",
    ticket:"https://www.keralatourism.org"
  }
};

const s = new URLSearchParams(location.search).get("state");

if(data[s]){
  title.innerText = data[s].name;
  places.innerText = data[s].places;
  time.innerText = data[s].time;
  cost.innerText = data[s].cost;
  ticket.href = data[s].ticket;
  photo.src = "https://source.unsplash.com/800x400/?" + data[s].img;
}else{
  title.innerText = "State Not Found";
}
