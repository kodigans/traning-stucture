import './Styles/main.less';
import './Styles/desktop.blocks/main/post/landishi.png';
import './Styles/desktop.blocks/main/post/politra.png';
import { fixedMainMenuPage } from './scripts/fixed-menu';

window.onscroll = () => {
  fixedMainMenuPage();
};
