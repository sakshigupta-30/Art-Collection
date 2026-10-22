/* Collection data — add an entry here and the grid renders it. */
const artworks = [
  {
    image: "images/EC2590B2-9692-4798-BBC5-623DD2C46121.jpg",
    title: "Untitled, 2012",
    artist: "Tapas Maiti"
  },
  {
    image: "images/C615E538-0B22-4A5B-AFD3-33EB13CFC344.jpg",
    title: "Untitled, 2013",
    artist: "Tapas Maiti"
  },
  {
    image: "images/4234A223-046E-4938-B94D-85D969989701.jpg",
    title: "Untitled",
    artist: "Tapas Maiti"
  },
  {
    image: "images/1783CF57-B11D-4B14-B063-523168DD8ACF.jpg",
    title: "Untitled",
    artist: "Ravi Rajvansh"
  },
  {
    image: "images/24901FEC-D5AB-4D06-9AA1-BDB40586422F.jpg",
    title: "Untitled",
    artist: "Anjoli Ela Menon"
  },
  {
    image: "images/2E4D671D-85B2-45AF-BBE6-92D2DC4CB88D.jpg",
    title: "Untitled",
    artist: "Artist unknown"
  },
  {
    image: "images/64037421-5B57-4BC6-8351-91B7D6744167.jpg",
    title: "Untitled",
    artist: "Artist unknown"
  },
  {
    image: "images/C83B764E-F5C5-4040-91C0-7DADD6A0C62B.jpg",
    title: "Untitled",
    artist: "Artist unknown"
  },
  {
    image: "images/E5E5A5B7-1EDE-4016-B2EA-26F21F1E71D5.jpg",
    title: "Snow Maiden, 1947",
    artist: "Prof. Nicholas Roerich"
  },
  {
    image: "images/A2AB1CFA-78C2-40EB-962A-7CF2D6D5A8CA.jpg",
    title: "Alexandr Nevsky, 1942",
    artist: "Prof. Nicholas Roerich"
  },
  {
    image: "images/Artwork 1.jpeg",
    title: "Earring, One of a Pair",
    artist: "Artist unknown"
  },
  {
    image: "images/Artwork 2.jpeg",
    title: "Head of a Man",
    artist: "In the manner of Pietro Antonio Novelli (Italian, Venice 1729–1804 Venice) "
  },
  {
    image: "images/Artwork 3.jpeg",
    title: "Plate ",
    artist: "Ulisse Cantagalli "
  },
  {
    image: "images/Artwork 4.jpeg",
    title: "Fishbowl with birds and flowers ",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 5.jpeg",
    title: "Portrait scroll of seven generations of the same family ",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 6.jpeg",
    title: "Zhong Kui accompanied by an attendant and a bat ",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 7.jpeg",
    title: "Luohan with an armrest  ",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 8.jpeg",
    title: " La petite bouteille bleue ",
    artist: "Samuel Amsler "
  },
  {
    image: "images/Artwork 9.jpeg",
    title: "Head of Balzac ",
    artist: "Auguste Rodin "
  },
  {
    image: "images/Artwork 10.jpeg",
    title: "Despairing Adolescent ",
    artist: "Auguste Rodin  "
  },
  {
    image: "images/Artwork 11.jpeg",
    title: "Country Store ",
    artist: "Reginald Wilson "
  },
  {
    image: "images/Artwork 12.jpeg",
    title: "Winter Sunlight ",
    artist: "Glenn Stuart Pearce "
  },
  {
    image: "images/Artwork 13.jpeg",
    title: "Seated Male Figure ",
    artist: "Daniel Rasmusson "
  },
  {
    image: "images/Artwork 14.jpeg",
    title: "Air Raid ",
    artist: "Joseph Hirsch  "
  },
  {
    image: "images/Artwork 15.jpeg",
    title: "Linda ",
    artist: "Dox Thrash "
  },
  {
    image: "images/16.png",
    title: "Self-Portrait ",
    artist: "Samuel Joseph Brown, Jr. "
  },
  {
    image: "images/Artwork 17.jpeg",
    title: "Suggestion by Whistler for his Portrait ",
    artist: "After James McNeill Whistler "
  },
  {
    image: "images/Artwork 18.jpeg",
    title: "Rocks and Weeds ",
    artist: "John Atherton "
  },
  {
    image: "images/Artwork 19.jpeg",
    title: "Louis XIII style Ovolo frame ",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 20.png",
    title: "Untitled",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 21.png",
    title: "Swiss gramophone ",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 22.png",
    title: "Untitled",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 23.png",
    title: "Untitled",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 24.png",
    title: "Untitled",
    artist: "Artist unknown "
  },
  {
    image: "images/Artwork 25.png",
    title: "Untitled",
    artist: "Artist unknown "
  }
];

function card({ image, title, artist }, index) {
  const li = document.createElement("li");
  li.className = "card";

  const img = document.createElement("img");
  img.src = image;
  img.alt = `${title} by ${artist}`;
  // First row is above the fold; lazy-load the rest.
  img.loading = index < 3 ? "eager" : "lazy";
  img.decoding = "async";

  const media = document.createElement("div");
  media.className = "card-media";
  media.append(img);

  const name = document.createElement("h2");
  name.className = "card-title";
  name.textContent = title;

  const by = document.createElement("p");
  by.className = "card-artist";
  by.textContent = artist;

  const caption = document.createElement("figcaption");
  caption.append(name, by);

  const figure = document.createElement("figure");
  figure.append(media, caption);
  li.append(figure);
  return li;
}

const gallery = document.getElementById("gallery");
if (gallery) gallery.append(...artworks.map(card));

/* One shared footer for every page in this small static site. */
const footerMount = document.querySelector("[data-footer]");
if (footerMount) {
  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <p class="footer-kicker">A considered archive of art</p>
          <a class="footer-title" href="index.html">Art Collection</a>
        </div>
        <div class="footer-contact">
          <p class="footer-label">Contacts</p>
          <a class="footer-phone" href="tel:+919810241992">+91 98102 41992</a>
          <a href="mailto:hello@artcollection.example">hello@artcollection.example</a>
          <a href="contact.html">Enquiries &amp; appointments</a>
        </div>
       <div class="footer-address-block">
          <p class="footer-address">
            <strong>Address:</strong><br>
            H.No. 10980, East Park Road,<br>
            Karol Bagh, New Delhi - 5
          </p>
        </div>
      </div>
      <div class="footer-base">
        <span>&copy; 2026 Art Collection</span>
      </div>
    </footer>`;
}
/* Mobile navigation */
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

/* Contact form — no backend, so report validity and reset. */
const form = document.getElementById("contact-form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("form-status");
  if (!form.reportValidity()) return;
  form.reset();
  status.textContent = "Thank you — your message has been received.";
});
