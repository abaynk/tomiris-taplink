import "./styles.css";
import img from "./assets/photo.png";
import pdf from "./assets/document.pdf";
import tele from "./assets/telegram.svg";
import gmail from "./assets/gmailpng.png";
import arrow from "./assets/arrow.svg";

import Card from "./components/Card";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <img
        src={img}
        alt="img"
        style={{
          width: "75px",
          borderRadius: "50%",
          border: "2px solid #fff"
        }}
      />
      <h1 className="name">Tomiris Suzhanova</h1>
      <h4 className="heading">Привет 🤍</h4>
      <br />
      <h3 className="about">
        Меня зовут Томирис. Я люблю моду, стиль, создавать атмосферные снимки и
        путешествовать. Стараюсь видеть во всем лучшую сторону, наслаждаться
        моментом, быть смелой и всегда идти к своим целям!
      </h3>
      <div className="arrow">
        <span>
          <img src={arrow} alt="v" width="10" />
        </span>
      </div>
      <Card
        heading="Разбор профиля"
        extra="Что будет входить в разбор профиля? 
      Мы разберем с вами главные ошибки, выберем цвета вашей ленты, обработку и стиль, покажу вам приложения для обработки фото и видео, а также научимся подбирать референсы и планировать ленту. 
      Я буду рада помочь улучшить эстетику вашего Инстаграм!"
        alwaysOpen={true}
        link="https://t.me/tomiris_suzhanova"
      />
      <Card
        heading="Оффлайн контент съемка"
        extra="Оффлайн контент съёмка проходит в Астане и в Вене. Мы подберем с вами образы для съемки и интересные локации. Я предоставлю вам видео и фото контент, также помогу вам с позированием."
        alwaysOpen={true}
        link="https://t.me/tomiris_suzhanova"
      />
      <Card
        heading="Помощь при поступлении"
        subheading="Развернуть"
        extra="Я учусь в Венском университете на факультете Журналистики и медиа коммуникаций. 
      Живу в Вене и буду рада помочь в поступлении, адаптации и поиска жилья. Для подробной информации скачивай PDF файл."
        document={pdf}
      />
      <a href="mailto:suzhanova.tomiris@gmail.com">
        <button className="colab">Сотрудничество</button>
      </a>
      <Card
        heading="Youtube"
        subheading="Cнимаю видео о жизни и учебе в Вене, своих путешествиях и моде. Присоединяйся!"
        link="https://youtube.com/c/TomirisSuzhanova"
      />

      <div className="arrow">
        <span>
          <img src={arrow} alt="v" width="10" />
        </span>
      </div>
      <div className="buttons">
        <Button
          name="Telegram"
          img={tele}
          link="https://t.me/tomiris_suzhanova"
          clas="buttonTele"
        />
        <Button
          name="Gmail"
          img={gmail}
          link="mailto:suzhanova.tomiris@gmail.com"
          clas="buttonGmail"
        />
      </div>
    </div>
  );
}
