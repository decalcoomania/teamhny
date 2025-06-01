import React, { useState } from 'react';
import Header from '../components/header';
import bgImageRecommendations from '../assets/stats/fon.png';
import ModalDetails from '../components/ModalDetails'; // модальне вікно
import './recommendations.css';

import princessBride from '../assets/stats/The Princess Bride.png';
import breakingBad from '../assets/stats/Breaking Bad.jpg';
import harryPotter from '../assets/stats/Harry Potter and the Philosopher’s Stone.png';
import kingSpeech from '../assets/stats/The King’s Speech.png';
import strangerThings from '../assets/stats/Stranger Things.jpg';
import diaryWimpyKid from '../assets/stats/Diary of a Wimpy Kid.png';
import forrestGump from '../assets/stats/Forrest Gump.png';
import endOfWorld from '../assets/stats/The End of the f World.jpg';
import wonder from '../assets/stats/Wonder.png';
import walterMitty from '../assets/stats/The Secret Life of Walter Mitty.png';
import sopranos from '../assets/stats/The Sopranos.jpg';
import faultInOurStars from '../assets/stats/The Fault in Our Stars.png';

const recommendationsItems = [
  {
    img: princessBride,
    title: 'Принцеса-наречена',
    originalTitle: 'The Princess Bride',
    description: 'Романтична казка з гумором і пригодами про кохання, що долає піратів, велетнів і злих принців.',
    fullDescription: 'Романтична і чарівна казка з гумором і пригодами, що розповідає про справжнє кохання, яке долає всі перешкоди: піратів, велетнів і злих принців. Фільм сповнений яскравих персонажів, несподіваних поворотів і тепла, що робить його улюбленим для кількох поколінь глядачів. Це історія про відвагу, дружбу і силу любові.',
    author: 'Вільям Голдман',
    year: 1987,
    genre: 'Романтика / Пригоди',
    link: 'https://sflix.to/movie/free-the-princess-bride-hd-17632'
  },
  {
    img: breakingBad,
    title: 'Пуститися берега',
    originalTitle: 'Breaking Bad',
    description: 'Вчитель хімії, дізнавшись про смертельну хворобу, починає варити наркотики, щоб забезпечити сім’ю, але поступово сам стає частиною злочинного світу.',
    fullDescription: 'Напружена кримінальна драма про вчителя хімії, який, дізнавшись про свою смертельну хворобу, починає варити метамфетамін, щоб забезпечити сім’ю. Серіал досліджує теми моралі, наслідків вибору та трансформації людини під тиском обставин.',
    author: 'Вінс Ґілліган',
    year: 2008,
    genre: 'Кримінал / Драма',
    link: 'https://engvideo.net/en/serials/breaking-bad-serial/'
  },
  {
    img: harryPotter,
    title: 'Гаррі Поттер і філософський камінь',
    originalTitle: 'Harry Potter and the Philosopher’s Stone',
    description: 'Сирота Гаррі Поттер дізнається, що він чарівник, і вирушає на навчання до школи магії Гоґвортс, де на нього чекають дивовижні пригоди.',
    fullDescription: 'Історія сироти Гаррі Поттера, який дізнається, що він чарівник, і вступає до школи магії Хогвартс. Там він зустрічає вірних друзів, протистоїть злу і відкриває таємниці свого минулого. Роман — початок епічної саги про дружбу, відвагу та боротьбу за добро.',
    author: 'Дж. К. Роулінг',
    year: 1997,
    genre: 'Фентезі',
    link: 'https://en.readanybook.com/ebook/harry-potter-and-the-philosophers-stone-565431'
  },
  {
    img: kingSpeech,
    title: 'Король говорить!',
    originalTitle: 'The King’s Speech',
    description: 'Історична драма про британського короля Георга VI, який, попри заїкання, знаходить у собі силу виступати перед нацією завдяки нестандартному логопеду.',
    fullDescription: 'Історична драма про британського короля Георга VI, який бореться зі своєю заїканням у критичний період історії. З підтримкою нестандартного логопеда він знаходить в собі силу виступати перед народом у важкі часи. Фільм підкреслює важливість дружби, мужності та здатності долати внутрішні страхи.',
    author: 'Девід Сідон',
    year: 2010,
    genre: 'Драма / Біографія',
    link: 'https://himovies.sx/movie/the-secret-life-of-walter-mitty-18800'
  },
  {
    img: strangerThings,
    title: 'Дивні дива',
    originalTitle: 'Stranger Things',
    description: 'У провінційному містечку зникає хлопчик, і його друзі разом із дівчинкою з надздібностями стикаються з урядовими змовами й істотами з паралельного світу.',
    fullDescription: 'Фантастичний серіал про зникнення хлопчика в провінційному містечку і дивовижні події, що розгортаються навколо цього. Група дітей разом із дівчинкою з надздібностями протистоять урядовим змовам і надприродним силам. Серіал наповнений таємницями, дружбою та небезпеками.',
    author: 'Брати Даффери',
    year: 2016,
    genre: 'Фантастика / Драма',
    link: 'https://inoriginal.net/series/489-stranger-things-2016.html'
  },
  {
    img: diaryWimpyKid,
    title: 'Щоденник слабака',
    originalTitle: 'Diary of a Wimpy Kid',
    description: 'Ґреґ Гефлі — веселий і трохи незграбний школяр, який ділиться пригодами свого життя в щоденнику, сповненому гумору та дитячих клопотів.',
    fullDescription: 'Веселий і дотепний щоденник школяра Ґреґа Гефлі, який розповідає про свої повсякденні пригоди, труднощі з однокласниками і родиною, а також комічні ситуації. Серія книг сповнена гумору, який близький кожному підлітку.',
    author: 'Джефф Кінні',
    year: 2007,
    genre: 'Дитяча література / Юмор',
    link: 'https://en.readanybook.com/series-online/diary-of-a-wimpy-kid'
  },
  {
    img: forrestGump,
    title: 'Форест Ґамп',
    originalTitle: 'Forrest Gump',
    description: 'Надихаюча драма про простого чоловіка з добрим серцем, який випадково опиняється в центрі ключових подій американської історії',
    fullDescription: 'Надихаюча історія простого і щирого чоловіка з добрим серцем, який випадково опиняється в центрі ключових історичних подій США. Через свою доброту, наполегливість і унікальний погляд на світ він змінює життя багатьох людей і надихає на віру у диво.',
    author: 'Вінстон Грум',
    year: 1986,
    genre: 'Драма / Роман',
    link: 'https://himovies.sx/movie/the-kings-speech-19179'
  },
  {
    img: endOfWorld,
    title: 'Кінець ї***ого світу',
    originalTitle: 'The End of the F***ing World',
    description: 'Двоє підлітків-ізгоїв тікають з дому у відчайдушну подорож, яка починається як бунт, а перетворюється на пошук себе й справжніх почуттів.',
    fullDescription: 'Історія двох підлітків-ізгоїв, які тікають з дому у відчайдушну подорож, що починається як акт бунту, але перетворюється на пошук себе та справжніх почуттів. Серіал поєднує чорний гумор із драматичними моментами, досліджуючи тему дорослішання.',
    author: 'Чарлі Кокс',
    year: 2011,
    genre: 'Драма / Комедія',
    link: 'https://inoriginal.net/series/1122-the-end-of-the-fucking-world-2017.html'
  },
  {
    img: wonder,
    title: 'Диво',
    originalTitle: 'Wonder',
    description: 'Оґґі — хлопчик із незвичайною зовнішністю, який вперше йде до школи. Йому доводиться долати упередження та вчити інших бачити внутрішню красу.',
    fullDescription: 'Зворушлива історія хлопчика Оґґі з незвичайною зовнішністю, який вперше іде до звичайної школи. Він стикається з упередженнями, але через доброту і мужність змінює серця оточуючих, показуючи важливість прийняття і внутрішньої краси.',
    author: 'Р. Дж. Паласіо',
    year: 2012,
    genre: 'Драма / Родина',
    link: 'https://lythrumpress.com.au/novela/wonder/'
  },
  {
    img: walterMitty,
    title: 'Таємне життя Волтера Мітті',
    originalTitle: 'The Secret Life of Walter Mitty',
    description: 'Надихаючий фільм про скромного чоловіка, який мріє про пригоди — і зрештою вирушає у справжню подорож, щоб знайти себе.',
    fullDescription: 'Драма про скромного чоловіка, який живе у світі мрій та фантазій, але нарешті наважується вирушити у справжню подорож, щоб знайти себе. Цей фільм — про пошук власного шляху, подолання страхів і відкриття нових горизонтів.',
    author: 'Джеймс Тетер',
    year: 1939,
    genre: 'Пригоди / Драма',
    link: 'https://sflix.to/movie/free-dead-poets-society-hd-19063'
  },
  {
    img: sopranos,
    title: 'Клан Сопрано',
    originalTitle: 'The Sopranos',
    description: 'Мафіозі Тоні Сопрано бореться з панічними атаками й намагається зберегти контроль над сім’єю та кримінальним бізнесом, відвідуючи психотерапевта.',
    fullDescription: 'Глибока кримінальна драма про мафіозі Тоні Сопрано, який намагається балансувати між керівництвом злочинною сім’єю та особистими проблемами, відвідуючи психотерапевта. Серіал досліджує психологію влади, страхи і конфлікти між родиною та бізнесом.',
    author: 'Девід Чейз',
    year: 1999,
    genre: 'Кримінал / Драма',
    link: 'https://megogo.net/ua/view/3636611-klan-soprano-sezon-3-seriya-10.html'
  },
  {
    img: faultInOurStars,
    title: 'Провина зірок',
    originalTitle: 'The Fault in Our Stars',
    description: 'Підлітки Гейзел і Авґустус знайомляться на групі підтримки для хворих на рак і закохуються. Їхня історія — це подорож крізь біль, надію й справжнє кохання.',
    fullDescription: 'Історія про двох підлітків — Гейзел та Авґустуса, які знайомляться в групі підтримки для хворих на рак. Попри хвороби, вони закохуються одне в одного, разом переживають емоційні злети й падіння, мріють і шукають сенс життя. Це зворушлива, чесна й глибока розповідь про кохання, втрати та боротьбу з болем. Книга піднімає важливі теми: хвороба, смерть, надія, самопожертва й потреба залишити слід у світі.',
    author: 'Джон Грін',
    year: 2012,
    genre: 'Роман / Драма',
    link: 'https://www.readanybook.com/ebook/The-Fault-in-Our-Stars-1-565815'
  },
];

const Recommendations = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="recommendations-page">
      <img src={bgImageRecommendations} alt="Background" className="profile-bg-image2" />
      <Header />
      <div className="recommendations-container">
        <div className="recommendations-titles">
          <h3 className="category-title black">Фільми</h3>
          <h3 className="category-title serials">Серіали</h3>
          <h3 className="category-title black">Книги</h3>
        </div>

        <div className="category-grid">
          {recommendationsItems.map((item, idx) => (
            <div
              key={idx}
              className="category-content"
              onClick={() => openModal(item)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.img} alt={item.title} className="category-img" />
              <div className="category-text">
                <h4 className="item-title">{item.title}</h4>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && <ModalDetails item={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default Recommendations;
