let elStylesWithJS = document.createElement("style");
elStylesWithJS.textContent = `@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Chewy&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend+Deca:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Chewy&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend+Deca:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');*{margin:0;padding:0;box-sizing:border-box;}`;
document.head.append(elStylesWithJS);
// containeri
//////////////////////////////////////////////////
document.body.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;
// Ota div barcha cardlarni orab tu
//////////////////////////////////////////////////
let elCardsBoxGrp = document.createElement("div");
elCardsBoxGrp.style.cssText = `
display: flex;
`;
// Birinchi card sedans
//////////////////////////////////////////////////
let elCardsOne = document.createElement("div");
let elCardsOneHeadGrp = document.createElement("div");
let elCardsOneImg = document.createElement("img");
let elCardsOneTitle = document.createElement("h2");
let elCardsOneText = document.createElement("p");
let elCardsOneLink = document.createElement("a");
elCardsOneImg.src = "./img/first.svg";
elCardsOneTitle.textContent = "sedans".toUpperCase();
elCardsOneText.textContent =
  "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";
elCardsOneLink.href = "#";
elCardsOneLink.textContent = "Learn More";
elCardsOneHeadGrp.append(elCardsOneImg, elCardsOneTitle, elCardsOneText);
elCardsOne.append(elCardsOneHeadGrp, elCardsOneLink);
elCardsOne.style.cssText = `
max-width: 307px;
min-height: 500px;
height: 100%;
width: 100%;
background: #E28625;
display: flex;
flex-direction:column;
justify-content: space-between;
padding: 47.5px 47.5px;
color: #fff;
 border-bottom-left-radius: 13px;
 border-top-left-radius:13px


`;
elCardsOneHeadGrp.style.cssText = `
display: flex;
gap: 20px;
flex-direction: column;
`;
elCardsOneImg.style.cssText = `
width: 64px;
height: 40px;
`;
elCardsOneTitle.style.cssText = `
font-family: 'Big Shoulders';
font-size: 40px;
`;
elCardsOneText.style.cssText = `
font-family: 'Lexend Deca';
font-size: 15px;
line-height: 1.5;
`;
elCardsOneLink.style.cssText = `
width: 146px;
height: 48px;
text-decoration:none;
font-size: 15px;
font-family: 'Lexend Deca';
background: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
color: #E28625;
`;
// Ikkinchi div suvs
/////////////////////////////////////////////////////
let elCardsTwo = document.createElement("div");
let elCardsTwoHeadGrp = document.createElement("div");
let elCardsTwoImg = document.createElement("img");
let elCardsTwoTitle = document.createElement("h2");
let elCardsTwoText = document.createElement("p");
let elCardsTwoLink = document.createElement("a");
elCardsTwoImg.src = "./img/second.svg";
elCardsTwoTitle.textContent = "suvs".toUpperCase();
elCardsTwoText.textContent =
  "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.";
elCardsTwoLink.href = "#";
elCardsTwoLink.textContent = "Learn More";
elCardsTwoHeadGrp.append(elCardsTwoImg, elCardsTwoTitle, elCardsTwoText);
elCardsTwo.append(elCardsTwoHeadGrp, elCardsTwoLink);
elCardsTwo.style.cssText = `
max-width: 307px;
min-height: 500px;
height: 100%;
width: 100%;
background: #006971;
display: flex;
flex-direction:column;
justify-content: space-between;
padding: 47.5px 47.5px;
color: #fff;
`;
elCardsTwoHeadGrp.style.cssText = `
display: flex;
gap: 20px;
flex-direction: column;
`;
elCardsTwoImg.style.cssText = `
width: 64px;
height: 40px;
`;
elCardsTwoTitle.style.cssText = `
font-family: 'Big Shoulders';
font-size: 40px;
`;

elCardsTwoText.style.cssText = `
font-family: 'Lexend Deca';
font-size: 15px;
line-height: 1.5;
`;
elCardsTwoLink.style.cssText = `
width: 146px;
height: 48px;
text-decoration:none;
font-size: 15px;
font-family: 'Lexend Deca';
background: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
color: #006971;
`;
// uchinchi card Luxury
//////////////////////////////////////////////////////
let elCardsThree = document.createElement("div");
let elCardsThreeHeadGrp = document.createElement("div");
let elCardsThreeImg = document.createElement("img");
let elCardsThreeTitle = document.createElement("h2");
let elCardsThreeText = document.createElement("p");
let elCardsThreeLink = document.createElement("a");
elCardsThreeImg.src = "./img/third.svg";
elCardsThreeTitle.textContent = "Luxury".toUpperCase();
elCardsThreeText.textContent =
  "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.";
elCardsThreeLink.href = "#";
elCardsThreeLink.textContent = "Learn More";
elCardsThreeHeadGrp.append(
  elCardsThreeImg,
  elCardsThreeTitle,
  elCardsThreeText
);
elCardsThree.append(elCardsThreeHeadGrp, elCardsThreeLink);
elCardsThree.style.cssText = `
max-width: 307px;
min-height: 500px;
height: 100%;
width: 100%;
background: #004140;
display: flex;
flex-direction:column;
justify-content: space-between;
padding: 47.5px 47.5px;
color: #fff;
 border-bottom-right-radius: 13px;
 border-top-right-radius:13px
`;
elCardsThreeHeadGrp.style.cssText = `
display: flex;
gap: 20px;
flex-direction: column;
`;
elCardsThreeImg.style.cssText = `
width: 64px;
height: 40px;
`;
elCardsThreeTitle.style.cssText = `
font-family: 'Big Shoulders';
font-size: 40px;
`;
elCardsThreeText.style.cssText = `
font-family: 'Lexend Deca';
font-size: 15px;
line-height: 1.5;
`;
elCardsThreeLink.style.cssText = `
width: 146px;
height: 48px;
text-decoration:none;
font-size: 15px;
font-family: 'Lexend Deca';
background: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
color: #004140;
`;
// barcha cardlarni ota divga qoshish  va ota divni body ga qoshish
//////////////////////////////////////////////////////
elCardsBoxGrp.append(elCardsOne, elCardsTwo, elCardsThree);
document.body.append(elCardsBoxGrp);
