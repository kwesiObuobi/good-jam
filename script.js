const menuIcon = document.querySelectorAll('.hamburgur');

menuIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

const closeMenu = () => {
  document.querySelector('.mobile-nav').style.display = 'none';
  document.body.style.overflow = 'scroll';
};

closeMenu();

// const moreBtn = document.querySelectorAll('.more-btn');
// const moreSpeakers = document.querySelectorAll('.speaker-more');

// moreBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     btn.style.display = 'none';
//     moreSpeakers.forEach((speaker) => {
//       speaker.style.display = 'flex';
//     });
//   });
// });

const speakers = [
  {
    name: 'Israel Houghton',
    role: 'Founder of the New Breed Incorporation',
    description: 'As the visioneer of the New Breed Incorporation, He\'s led many to enjoyable worship concerts.',
    imgSrc: 'images/israel-houghton.jpeg',
    imgAlt: 'Israel Houghton ministering',
  },
  {
    name: 'Britanni Washington',
    role: 'Joined the Belk College faculty in 2021',
    description: 'With competence in the bass, keys, and drums, Brittani has been on 100s of recording pieces.',
    imgSrc: 'images/britanni.jpg',
    imgAlt: 'Britanni smiling for photo',
  },
  {
    name: 'passhere',
  },
  {
    name: 'Calvin Rodgers',
    role: 'With over 200+ awards won, including three GRAMMYS',
    description: 'Calvin has produced hundreds of studio recordings which have won many awards due to their quality.',
    imgSrc: 'images/calvin-rogers.jpg',
    imgAlt: 'Calvin Rodgers on drums',
  },
  {
    name: 'Mohini Dey',
    role: 'A musical prodigy, giving tours since she was 11',
    description: 'Known as the bass guitar wizard, Mohini\'s precision is flawless.',
    imgSrc: 'images/mohini.jpg',
    imgAlt: 'Monihi Dey on bass',
  },
  {
    name: 'Victor Wooten',
    role: 'Most amazing American bassist and record producer',
    description: 'Five-time Grammy award winner, with revelations about music you never knew existed.',
    imgSrc: 'images/victor-wooten.jpg',
    imgAlt: 'Victor wooten on bass',
  },
  {
    name: 'Bob James',
    role: 'American Jazz Keyboardist and arranger.',
    description: 'Founded the Fourplay band and wrote the theme song for the \'Taxi\' TV show.',
    imgSrc: 'images/bob-james.jpg',
    imgAlt: 'Bob james on keys',
  },
];

// const speakerList = document.querySelector('.speakers-list');
const speakerList = document.createElement('ul');
speakerList.classList.add('speakers-list');

// console.log(speakerList);
for (let i = 0; i < speakers.length; i += 1) {
  if (i === 2) {
    const moreBtn = document.createElement('li');
    moreBtn.classList.add('speaker-li', 'more-btn');
    moreBtn.innerHTML = 'MORE';
    moreBtn.innerHTML += '<i class="fa-solid fa-angle-down angle-down"></i>';

    moreBtn.addEventListener('click', () => {
      moreBtn.style.display = 'none';
      document.querySelectorAll('.speaker-more').forEach((speaker) => {
        speaker.style.display = 'flex';
      });
    });
    speakerList.appendChild(moreBtn);
  } else {
    const speakerLi = document.createElement('li');
    speakerLi.classList.add('speaker-li');
    if (i > 2) {
      speakerLi.classList.add('speaker-more');
    }

    const speakerLiImgBox = document.createElement('div');
    speakerLiImgBox.classList.add('speaker-li-img-box');

    const speakerLiImg = document.createElement('img');
    speakerLiImg.classList.add('speaker-li-img');
    speakerLiImg.src = speakers[i].imgSrc;
    speakerLiImg.alt = speakers[i].imgAlt;

    const speakerInfoBox = document.createElement('div');
    speakerInfoBox.classList.add('speaker-info-box');

    const speakerName = document.createElement('h4');
    speakerName.classList.add('speaker-name');
    speakerName.innerHTML = speakers[i].name;

    const speakerRole = document.createElement('p');
    speakerRole.classList.add('speaker-role');
    speakerRole.innerHTML = speakers[i].role;

    const speakerDesc = document.createElement('p');
    speakerDesc.classList.add('speaker-desc');
    speakerDesc.innerHTML = speakers[i].description;

    speakerInfoBox.appendChild(speakerName);
    speakerInfoBox.appendChild(speakerRole);
    speakerInfoBox.appendChild(speakerDesc);

    speakerLiImgBox.appendChild(speakerLiImg);

    speakerLi.appendChild(speakerLiImgBox);
    speakerLi.appendChild(speakerInfoBox);

    speakerList.appendChild(speakerLi);
  }
}

document.getElementById('speakers').appendChild(speakerList);
