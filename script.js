/* ============================================
   SSP Fashion Designer - 2026 Final Script.js
   Offline Orders + WhatsApp + Dashboard Status
============================================ */

/* ✅ Submit Form + WhatsApp Order */
function submitForm(type) {

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const shoulder = document.getElementById("shoulder").value;
  const chest = document.getElementById("chest").value;
  const waist = document.getElementById("waist").value;

  const data = {
    type,
    name,
    phone,
    shoulder,
    chest,
    waist,
    status: "Processing",
    date: new Date().toLocaleString()
  };

  /* ✅ Save Offline */
  localStorage.setItem(type + "Order", JSON.stringify(data));

  /* ✅ WhatsApp Message */
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

  /* ✅ Redirect to WhatsApp */
  let url = "https://wa.me/917200893968?text=" + encodeURIComponent(msg);
  window.location.href = url;
}

/* ✅ PDF Download Placeholder */
function downloadPDF() {
  alert("PDF Download feature: Next update will generate real PDF using jsPDF.");
}

/* ============================================
   ✅ Dashboard Status Update
============================================ */
function setStatus(type, status) {

  let order = localStorage.getItem(type + "Order");
  if (!order) return;

  let data = JSON.parse(order);
  data.status = status;

  localStorage.setItem(type + "Order", JSON.stringify(data));

  loadDashboard();
}

/* ============================================
   ✅ Load Dashboard Orders
============================================ */
function loadDashboard() {

  let container = document.getElementById("orders");
  container.innerHTML = "";

  let dressTypes = [
    "Churidar",
    "Blouse",
    "Kurti",
    "Saree Blouse",
    "Anarkali",
    "Pavadai"
  ];

  dressTypes.forEach((type) => {

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

          <div class="status-buttons">

            <button class="${o.status === "Processing" ? "active" : ""}"
              onclick="setStatus('${o.type}', 'Processing')">
              Order Processing
            </button>

            <button class="${o.status === "Finished" ? "active" : ""}"
              onclick="setStatus('${o.type}', 'Finished')">
              Finished
            </button>

            <button class="${o.status === "Delivered" ? "active" : ""}"
              onclick="setStatus('${o.type}', 'Delivered')">
              Delivered
            </button>

          </div>
        </div>
      `;
    }
  });
}

/* ============================================
   ✅ NEW Clear All Orders Button Function
============================================ */
function clearAllOrders() {

  if (confirm("Are you sure you want to clear ALL saved orders?")) {

    let dressTypes = [
      "Churidar",
      "Blouse",
      "Kurti",
      "Saree Blouse",
      "Anarkali",
      "Pavadai"
    ];

    /* ✅ Remove All Orders */
    dressTypes.forEach((type) => {
      localStorage.removeItem(type + "Order");
    });

    alert("All orders cleared successfully ✅");

    /* ✅ Reload Dashboard */
    loadDashboard();
  }
}
