// Example JavaScript: Scroll to sections smoothly
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const guests = document.getElementById('guests').value;

    // Simulate backend processing
    setTimeout(() => {
        document.getElementById('bookingResponse').textContent = 
            `Booking confirmed for ${guests} guest(s) to ${destination} from ${startDate} to ${endDate}.`;
    }, 1000);
});
// Initialize the map
const map = L.map('map').setView([20.0, 0.0], 2); // Center at latitude: 20.0, longitude: 0.0

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for destinations
const destinations = [
    { name: "Paris, France", lat: 48.8566, lon: 2.3522 },
    { name: "Bali, Indonesia", lat: -8.3405, lon: 115.092 },
    { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
];

destinations.forEach(dest => {
    L.marker([dest.lat, dest.lon])
        .addTo(map)
        .bindPopup(`<b>${dest.name}</b>`)
        .openPopup();
});

