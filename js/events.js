const events = [
  { id: 1, name: "Music Fest", date: "2025-07-15", location: "Kigali Arena", category: "Music", description: "A night of live music and dance." },
  { id: 2, name: "Tech Expo", date: "2025-07-20", location: "Kigali Convention Centre", category: "Tech", description: "Explore the latest in technology." },
  { id: 3, name: "Marathon", date: "2025-07-18", location: "Kigali Streets", category: "Sports", description: "Annual city marathon." }
];

function applyFilters() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const selectedDate = document.getElementById("dateFilter").value;
  const selectedCategory = document.getElementById("categoryFilter").value;
  const filtered = events.filter(event => {
    const matchName = event.name.toLowerCase().includes(searchValue);
    const matchDate = !selectedDate || event.date === selectedDate;
    const matchCategory = !selectedCategory || event.category === selectedCategory;
    return matchName && matchDate && matchCategory;
  });
  displayFilteredEvents(filtered);
}

function displayFilteredEvents(eventList) {
  const container = document.getElementById("filteredEvents");
  container.innerHTML = "";
  if (eventList.length === 0) {
    container.innerHTML = "<p class='text-center'>No events found.</p>";
    return;
  }
  eventList.forEach(event => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary">View Details</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

window.onload = () => {
  if (document.getElementById("eventsContainer")) {
    displayFilteredEvents(events);
  }
};
