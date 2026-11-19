export {};

// Array cu imaginile din folderul ../MEDIA
const images: string[] = [
    "../MEDIA/i1.webp", 
    "../MEDIA/i2.webp",
    "../MEDIA/i3.webp"
];

// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

// Verificam daca elementul exista
if (!mainImage) throw new Error("Elementul carousel-image nu a fost gasit!");

let currentIndex: number = 0;

// Functie care schimba imaginea mare
function showNextImage(): void {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex]!;
}

// Slider automat la 3 secunde
setInterval(showNextImage, 3000);