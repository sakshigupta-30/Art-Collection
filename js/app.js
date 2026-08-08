/* Collection data — add an entry here and the grid renders it. */
const artworks = [
  {
    image: "https://picsum.photos/id/1015/900/675",
    title: "The Silent Forest",
    artist: "John Doe"
  },
  {
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=900&q=70",
    title: "Study in Ochre",
    artist: "Meera Nair"
  },
  {
    image: "https://picsum.photos/id/1043/900/675",
    title: "Untitled (Blue)",
    artist: "Rafael Costa"
  },
  {
    image: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=900&q=70",
    title: "Interior With Figure",
    artist: "Anita Roy"
  },
  {
    image: "https://picsum.photos/id/1069/900/675",
    title: "Salt Field",
    artist: "Yusuf Karim"
  },
  {
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=900&q=70",
    title: "Monsoon Notes",
    artist: "Leela Varma"
  },
  {
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=70",
    title: "Second Light",
    artist: "Tomas Weiss"
  },
  {
    image: "https://images.unsplash.com/photo-1573221566340-81bdde00e00b?auto=format&fit=crop&w=900&q=70",
    title: "The Long Afternoon",
    artist: "Priya Menon"
  },
  {
    image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=900&q=70",
    title: "Fragment IX",
    artist: "Elias Ferrand"
  }
];

function card({ image, title, artist }, index) {
  const li = document.createElement("li");
  li.className = "card";

  const img = document.createElement("img");
  img.src = image;
  img.alt = `${title} by ${artist}`;
  img.width = 900;
  img.height = 675;
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
          <a class="footer-phone" href="tel:+917696842238">+91 7696842238</a>
          <a href="mailto:hello@artcollection.example">hello@artcollection.example</a>
          <a href="contact.html">Enquiries &amp; appointments</a>
        </div>
        <div class="footer-social" aria-label="Social links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4.2"/>
              <circle cx="17.4" cy="6.6" r="1"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2v15H.4V8zM8.6 8h4v2.05h.06c.56-1.06 1.94-2.18 4-2.18 4.28 0 5.07 2.82 5.07 6.5V23h-4.2v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V23H8.6V8z"/>
            </svg>
          </a>
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
