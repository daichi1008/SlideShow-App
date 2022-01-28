const spring = { img: `./img/slide1.png`, text: `春へ` };
const summer = { img: `./img/slide2.png`, text: `夏へ` };
const autumn = { img: `./img/slide3.png`, text: `秋へ` };
const winter = { img: `./img/slide4.png`, text: `冬へ` };
const pushBtn = document.getElementById(`pushBtn`);
const imgSection = document.getElementById(`viewImg`)

const data = [
    { img: `./img/slide1.png`, text: `春へ` },
    { img: `./img/slide2.png`, text: `夏へ` },
    { img: `./img/slide3.png`, text: `秋へ` },
    { img: `./img/slide4.png`, text: `冬へ` },
];

let imgNum = 0
pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute(`src`, data[imgNum].img);

pushBtn.addEventListener(`click`, function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1
    }

    imgSection.setAttribute(`src`, data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;
});

// チャレンジ問題
const skipBtn = document.getElementById(`skipBtn`)
const seasonNum = document.getElementById(`seasonNum`)

skipBtn.addEventListener(`click`, function () {
    console.dir(seasonNum.value);
    imgSection.setAttribute(`src`, data[seasonNum.value].img);
    pushBtn.textContent = data[seasonNum.value].text;
});
