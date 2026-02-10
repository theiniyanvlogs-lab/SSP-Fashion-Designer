function submitForm(type) {

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const shoulder = document.getElementById("shoulder").value;
  const chest = document.getElementById("chest").value;
  const waist = document.getElementById("waist").value;

  // Save Offline in LocalStorage
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

  // WhatsApp Message
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

  // Encode Message
  let url =
    "https://wa.me/917200893968?text=" +
    encodeURIComponent(msg);

  // ✅ FIX: Redirect Instead of Popup
  window.location.href = url;
}
