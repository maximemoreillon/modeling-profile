// Age and footer year are rendered at build time; refresh them in case the
// site hasn't been rebuilt since a birthday or new year.

function computeAge(birthday: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const hadBirthday =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() >= birthday.getDate());
  if (!hadBirthday) age--;
  return age;
}

const ageElement = document.querySelector<HTMLElement>("[data-birthday]");
if (ageElement) {
  const age = computeAge(new Date(ageElement.dataset.birthday!));
  const template = ageElement.dataset.template ?? "{age}";
  ageElement.textContent = template.replace("{age}", String(age));
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

// Lightbox

interface LightboxItem {
  youtube?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

const lightbox = document.querySelector<HTMLDialogElement>("#lightbox")!;
const lightboxContent = lightbox.querySelector<HTMLElement>(".lightbox-content")!;
const lightboxCaption = lightbox.querySelector<HTMLElement>(".lightbox-caption")!;
const prevButton = lightbox.querySelector<HTMLButtonElement>(".lightbox-prev")!;
const nextButton = lightbox.querySelector<HTMLButtonElement>(".lightbox-next")!;

let lightboxItems: LightboxItem[] = [];
let lightboxIndex = 0;

function showLightboxItem(index: number) {
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];

  lightboxContent.replaceChildren();
  if (item.youtube) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&rel=0`;
    iframe.title = item.caption ?? "";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    lightboxContent.append(iframe);
  } else if (item.src) {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt ?? "";
    lightboxContent.append(img);
  }

  lightboxCaption.textContent = item.caption ?? "";
}

function openLightbox(items: LightboxItem[], index = 0) {
  lightboxItems = items;
  const multiple = items.length > 1;
  prevButton.hidden = !multiple;
  nextButton.hidden = !multiple;
  showLightboxItem(index);
  lightbox.showModal();
}

prevButton.addEventListener("click", () => showLightboxItem(lightboxIndex - 1));
nextButton.addEventListener("click", () => showLightboxItem(lightboxIndex + 1));
lightbox
  .querySelector(".lightbox-close")!
  .addEventListener("click", () => lightbox.close());

// Close when clicking the backdrop
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

lightbox.addEventListener("keydown", (event) => {
  if (lightboxItems.length < 2) return;
  if (event.key === "ArrowLeft") showLightboxItem(lightboxIndex - 1);
  if (event.key === "ArrowRight") showLightboxItem(lightboxIndex + 1);
});

// Stop video playback on close
lightbox.addEventListener("close", () => lightboxContent.replaceChildren());

// Portfolio cards with a video or photos

for (const card of document.querySelectorAll<HTMLButtonElement>("[data-caption]")) {
  const { youtube, photos, caption } = card.dataset;
  const items: LightboxItem[] = youtube
    ? [{ youtube, caption }]
    : (JSON.parse(photos ?? "[]") as string[]).map((src) => ({
        src,
        alt: caption,
        caption,
      }));
  card.addEventListener("click", () => openLightbox(items));
}

// Profile photos

const photoButtons = [
  ...document.querySelectorAll<HTMLButtonElement>(".photo-grid button"),
];
const photoItems: LightboxItem[] = photoButtons.map((button) => ({
  src: button.dataset.full,
  alt: button.querySelector("img")?.alt,
}));
photoButtons.forEach((button, index) =>
  button.addEventListener("click", () => openLightbox(photoItems, index)),
);
