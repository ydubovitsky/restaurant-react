import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faVk,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

import style from './footer.module.css';

export default function Footer() {
  return (
    <div className={style.footer}>
      <a className={style.up} href="#hero">
        Наверх
      </a>
      <div className={style.desContainer}>
        <div className={style.description}>
          <div className={style.logo}>
            <img src={process.env.PUBLIC_URL + '/logo100_120.png'} alt=""/>
            <h3>Consegna del cibo</h3>
          </div>
          <ul>
            <li>Для ресторанов</li>
            <li>Курьерам</li>
            <li>Пресс-центр</li>
            <li>Условия акций</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className={style.social}>
          <ul>
            <li><i><FontAwesomeIcon icon={faTwitterSquare} /></i></li>
            <li><i><FontAwesomeIcon icon={faFacebookSquare} /></i></li>
            <li><i><FontAwesomeIcon icon={faInstagramSquare} /></i></li>
            <li><i><FontAwesomeIcon icon={faVk} /></i></li>
          </ul>
        </div>
      </div>
      <div className={style.down}>
        © 2000–{new Date().getFullYear()}, ООО «Consegna del cibo», официальный сайт
      </div>
    </div>
  )
}