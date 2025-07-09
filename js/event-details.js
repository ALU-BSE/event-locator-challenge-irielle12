const eventsList = [
  { id: 1, name: "Music Fest", date: "2025-07-15", location: "Kigali Arena", category: "Music", description: "A night of live music and dance." },
  { id: 2, name: "Tech Expo", date: "2025-07-20", location: "Kigali Convention Centre", category: "Tech", description: "Explore the latest in technology." },
  { id: 3, name: "Marathon", date: "2025-07-18", location: "Kigali Streets", category: "Sports", description: "Annual city marathon." }
];

const urlParams = new URLSearchParams(window.location.search);
const eventId = parseInt(urlParams.get("id"));
const eventDetailContainer = document.getElementById("eventDetail");

const selectedEvent = eventsList.find(ev => ev.id === eventId);

if (selectedEvent) {
  eventDetailContainer.innerHTML = `
    <h2>${selectedEvent.name}</h2>
    <p><strong>Date:</strong> ${selectedEvent.date}</p>
    <p><strong>Location:</strong> ${selectedEvent.location}</p>
    <p><strong>Category:</strong> ${selectedEvent.category}</p>
    <p>${selectedEvent.description}</p>
  `;
} else {
  eventDetailContainer.innerHTML = "<p>Event not found.</p>";
}
