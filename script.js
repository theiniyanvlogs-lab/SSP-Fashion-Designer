function submitForm(type) {

  // Get Values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const shoulder = document.getElementById("shoulder").value;
  const chest = document.getElementById("chest").value;
  const waist = document.getElementById("waist").value;

  // Save Offline (LocalStorage)
  const data = {
    type,
    name,
    phone,
    shoulder,
    chest,
    waist,
    date: new Date().toLocaleString()
  };

  localStorage.setItem(type + "Order", JSON.stringify(data));

  // WhatsApp Message Format
  let msg =
    `Hello SSP Fashion Designer 👗\n\n` +
    `Order Type: ${type}\n` +
    `Customer Name: ${name}\n` +
    `Phone: ${phone}\n\n` +
    `Measurements:\n` +
    `Shoulder: ${shoulder} inches\n` +
    `Chest: ${chest} inches\n` +
    `Waist: ${waist} inches\n\n` +
    `Thank you 🙏`;

  // WhatsApp URL
  let url =
    "https://wa.me/917200893968?text=" +
    encodeURIComponent(msg);

  // ✅ Mobile Friendly Redirect
  window.location.href = url;
}

/* ✅ Dashboard Load Orders */
function loadDashboard() {

  let container = document.getElementById("orders");
  container.innerHTML = "";

  ["Churidar", "Blouse", "Kurti"].forEach((type) => {

    let order = localStorage.getItem(type + "Order");

    if (order) {
      let o = JSON.parse(order);

      container.innerHTML += `
        <div class="card">
          <h3>${o.type} Order</h3>
          <p><b>Name:</b> ${o.name}</p>
          <p><b>Phone:</b> ${o.phone}</p>
          <p><b>Shoulder:</b> ${o.shoulder}</p>
          <p><b>Chest:</b> ${o.chest}</p>
          <p><b>Waist:</b> ${o.waist}</p>
          <small>Saved: ${o.date}</small>
        </div>
      `;
    }
  });
}
