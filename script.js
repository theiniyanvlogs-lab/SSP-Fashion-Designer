function submitForm(type){
  const name=document.getElementById("name").value;
  const phone=document.getElementById("phone").value;
  const shoulder=document.getElementById("shoulder").value;
  const chest=document.getElementById("chest").value;
  const waist=document.getElementById("waist").value;

  const data={type,name,phone,shoulder,chest,waist,date:new Date().toLocaleString()};
  localStorage.setItem(type+"Order", JSON.stringify(data));

  let msg=`Hello SSP Fashion Designer%0AOrder Type: ${type}%0AName: ${name}%0APhone: ${phone}%0AShoulder: ${shoulder}%0AChest: ${chest}%0AWaist: ${waist}%0AThank you`;
  window.open("https://wa.me/917200893968?text="+msg,"_blank");
}

function loadDashboard(){
  let container=document.getElementById("orders");
  container.innerHTML="";
  ["Churidar","Blouse","Kurti"].forEach(t=>{
    let order=localStorage.getItem(t+"Order");
    if(order){
      let o=JSON.parse(order);
      container.innerHTML += `<div class='card'><h3>${o.type}</h3>
      <p>Name: ${o.name}</p><p>Phone: ${o.phone}</p>
      <p>Shoulder: ${o.shoulder}</p><p>Chest: ${o.chest}</p><p>Waist: ${o.waist}</p>
      <small>${o.date}</small></div>`;
    }
  });
}
