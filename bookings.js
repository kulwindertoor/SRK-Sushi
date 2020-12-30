function onBookingSubmit(){
    var firstName = document.getElementById("bookings__firstNameID").value;
    var bookingDate = document.getElementById("booking__date").value;
    if (firstName.length==0 || bookingDate.length==0){
        alert("Cannot keep input fields empty!")
    }
    else{
        if (typeof(Storage) !== "undefined") {
            var allBookings = JSON.parse(localStorage.getItem("BookingArray") || "[]");
            if (allBookings.includes(bookingDate)){
                alert("This date is reserved!")
            }
            else{
                allBookings.push(bookingDate);
                localStorage.setItem("BookingArray",JSON.stringify(allBookings) );
                document.getElementById('bookings__firstNameID').value = '';
                document.getElementById('bookings__lastNameID').value = '';
                document.getElementById('bookings__emailID').value = '';
                document.getElementById('booking__date').value = '';
                document.getElementById('booking__time').value = '';
                alert("Congratulations, Your booking is reserved")
            }
        }
    }

}
