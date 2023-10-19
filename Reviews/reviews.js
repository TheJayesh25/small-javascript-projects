const reviews = [
    {
      profilePic: "https://i.pinimg.com/474x/d8/cf/ae/d8cfae402c4c835fe52e40a9159be0ea.jpg",
      reviewerName: "John Doe",
      position: "Tech Enthusiast",
      review: "I absolutely love this smartphone. It has a fantastic camera and blazing fast performance."
    },
    {
      profilePic: "https://i.pinimg.com/236x/f1/f3/52/f1f35248da63e685e1445b4deb7697e3.jpg",
      reviewerName: "Sarah Smith",
      position: "Software Engineer",
      review: "The battery life on this smartphone is incredible. I can go a whole day without charging."
    },
    {
      profilePic: "https://wallpapers.com/images/hd/squidward-pouring-coffee-random-pfp-7iq9m00bd4r6s0rz.jpg",
      reviewerName: "David Johnson",
      position: "Product Manager",
      review: "This smartphone's design is sleek and elegant. It's a real head-turner."
    },
    {
      profilePic: "https://i.quotev.com/kokl5spmrsaa.jpg",
      reviewerName: "Emily Davis",
      position: "Graphic Designer",
      review: "The display is stunning, and it's a joy to use for both work and entertainment."
    },
    {
      profilePic: "https://i1.sndcdn.com/avatars-000576753729-6heuyo-t500x500.jpg",
      reviewerName: "Michael Brown",
      position: "Photographer",
      review: "The camera quality is top-notch. It captures incredible details and colors."
    },
    {
      profilePic: "https://i.pinimg.com/222x/64/56/bd/6456bd6fded37480653b49f7ab3102eb.jpg",
      reviewerName: "Olivia Wilson",
      position: "Marketing Manager",
      review: "I love the user interface. It's user-friendly and intuitive to navigate."
    },
    {
      profilePic: "https://hypixel.net/attachments/image0-2-jpeg.3088443/",
      reviewerName: "Robert White",
      position: "Student",
      review: "This smartphone is perfect for my needs, and it doesn't break the bank."
    },
    {
      profilePic: "https://pm1.aminoapps.com/8002/e7117baa1e454f9e7a09ec1ef21a69ed8c9cfcfbr1-535-489v2_hq.jpg",
      reviewerName: "Linda Harris",
      position: "Teacher",
      review: "The smartphone's educational apps are a great help in my classroom."
    }
  ];

// initialDisplay();
// function initialDisplay(){
//     document.getElementById('img').innerHTML = `<img class='image' src=${reviews[0].profilePic} alt="">`;
//     document.getElementById('name').innerHTML = `${reviews[0].reviewerName}`;
//     document.getElementById('position').innerHTML = `${reviews[0].position}`;
//     document.getElementById('review').innerHTML = `${reviews[0].review}`;
        
// }
let count = 0;
window.onload = display();
function display(){
    document.getElementById('img').innerHTML = `<img class='image' src=${reviews[count].profilePic} alt="">`;
    document.getElementById('name').innerHTML = `${reviews[count].reviewerName}`;
    document.getElementById('position').innerHTML = `${reviews[count].position}`;
    document.getElementById('description').innerHTML = `${reviews[count].review}`;
    console.log(count);
}
function surprise(){
    do {
        temp = Math.floor(Math.random() * (reviews.length - 0) + 0);
    } while (temp === count); // Continue generating if it's the same as the previous count
    count = temp; // Update count with the new unique value
    display();
}