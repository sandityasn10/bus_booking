// script.js
document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const destinationSelect = document.getElementById('destination');
    const totalDisplay = document.getElementById('total');

    let selectedSeats = [];

    // Function to calculate total cost
    const calculateTotal = () => {
        const selectedDestination = destinationSelect.options[destinationSelect.selectedIndex];
        const pricePerSeat = parseFloat(selectedDestination.dataset.price);
        const totalCost = selectedSeats.length * pricePerSeat;

        totalDisplay.textContent = `Total: $${totalCost}`;
    };

    // Event listener for seat selection
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.dataset.filled === "true") {
                alert("This seat is already filled!");
                return;
            }

            seat.classList.toggle('selected');
            const seatNumber = seat.dataset.seat;

            // Add or remove seat from selectedSeats array
            if (selectedSeats.includes(seatNumber)) {
                selectedSeats = selectedSeats.filter(seat => seat !== seatNumber);
            } else {
                selectedSeats.push(seatNumber);
            }

            // Recalculate total whenever a seat is selected or deselected
            calculateTotal();
        });
    });

    // Event listener for destination change
    destinationSelect.addEventListener('change', () => {
        // Recalculate total when destination changes
        calculateTotal();
    });
});