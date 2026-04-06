const messages = [
  "Hey love 💕 I know today feels a little heavy...",
  "So I made this tiny world just for you 🥺",
  "Where you are loved, appreciated, and adored 💖",
  "Because YOU are literally my favorite person ever 😚",
  "I'm so proud of you, always 🫶",
  "Even on your bad days, you’re still amazing ✨",
  "Come here… sending you the biggest hug 🤗",
  "And a million kisses 😘😘😘",
  "You mean the world to me 🌍❤️",
  "Now smile for me please? 🥺💗",
  "Fuckkkk youuuuuuu, pineapple 😍😍😍",
];

// 👉 REPLACE THESE WITH YOUR REAL IMAGES
const images = [
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_2c71vt2c71vt2c71.png",
  "C:\Users\HP\Documents\hehe\ChatGPT Image Apr 5, 2026, 10_29_32 PM.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_wodc17wodc17wodc.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_7sc1q87sc1q87sc1.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_589s2m589s2m589s.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_hh5uh3hh5uh3hh5u.png",
  "C:\Users\HP\Documents\hehe\ChatGPT Image Apr 5, 2026, 10_37_00 PM.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_5mpblk5mpblk5mpb.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_5u6ppe5u6ppe5u6p.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_6xb3506xb3506xb3.png",
  "C:\Users\HP\Documents\hehe\Gemini_Generated_Image_7pg9cj7pg9cj7pg9.png"
];

let index = 0;

function nextMessage() {
  const msg = document.getElementById('message');
  const img = document.getElementById('photo');

  if (index < messages.length) {
    msg.innerText = messages[index];
    img.style.display = 'block';
    img.src = images[index % images.length];
    index++;
  } else {
    msg.innerText = "I love you more than words can say ❤️";
  }
}
