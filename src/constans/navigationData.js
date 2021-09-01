
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { Rings } from '../img/svg/Rings';
import { Event } from '../img/svg/Event';
import { Speaker } from '../img/svg/Speaker';
import { LightBulb } from '../img/svg/LightBulb';
import { Gift } from '../img/svg/Gift';
import { Birthday } from '../img/svg/Birthday';

export const navList = [
  { id: 'home', title: 'home', path: '/#' },
  { id: 'aboutUs', title: 'o nas', path: '/#aboutUs' },
  { id: 'services', title: 'usługi', path: '/#services', services: true, icon: faCaretDown },
  { id: 'attraction', title: 'atrakcje', path: '/#attraction', attraction: true, icon: faCaretDown },
  { id: 'recommend', title: 'opinie', path: '/#recommend' },
  { id: 'contact', title: 'kontakt', path: '/#footer' }
];

export const services = [
  { id: 'wedding', title: 'wesela', describe: 'świetna zabawa', icon: Rings, path: '/wedding' },
  { id: 'event', title: 'eventy', describe: 'pełen profesjonalizm', icon: Event, path: 'event' },
  { id: 'entertainment', title: 'okolicznści', describe: 'takie jak lubisz', icon: Birthday, path: '/entertainment' },
  { id: 'photography', title: 'fotograf ślubny', describe: 'zatrzymaj czas', icon: Speaker, path: '/photography' },
  { id: 'movie', title: 'filmowanie wesel', describe: 'wyszukany kadr', icon: LightBulb, path: '/movie' },
  { id: 'drink', title: 'drink bar', describe: 'artystyczne drinki', icon: Gift, path: '/drink' }
];

export const attraction = [
  { id: 'illusionist', title: 'iluzjonista', path: '/atrakcje/iluzjonista' },
  { id: 'low-fog', title: 'taniec w chmurach', path: '/atrakcje/taniec-w-chmurach' },
  { id: 'bobble', title: 'bańki mydlane', path: '/atrakcje/banki' },
  { id: 'love', title: 'napis love', path: '/atrakcje/napis-love' },
  { id: 'lights', title: 'dekoracja światłem', path: '/atrakcje/dekoracja-swiatlem' },
  { id: 'sparks', title: 'fontanny iskier', path: '/atrakcje/fontanny-iskier' },
  { id: 'confetti', title: 'wyrzutnia konfetti', path: '/atrakcje/konfetti' },
  { id: 'car', title: 'auto do ślubu', path: '/atrakcje/auto-do-slubu' }
];
