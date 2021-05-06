import {createContext} from 'react';
import Rings from '../img/svg/Rings';
import Event from '../img/svg/Event';
import Volume from '../img/svg/Speaker';
import Light from '../img/svg/LightBulb';
import Gift from '../img/svg/Gift';
import Birthday from '../img/svg/Birthday';

export const navigation = {
    navList:[
        {name: "home", path: "/"},
        {name: "o nas", path: "/aboutUs"},
        {name: "usługi", path: "/services"},
        {name: "opinie", path: "/recommend"},
        {name: "kontakt", path: "/contact"}],
    serviceList:[
        {id:0, title: "wesela", describe:"świetna zabawa", icon: <Rings/>, path: "/wedding", exact:"true"},
        {id:1, title: "eventy", describe:"pełen profesjonalizm", icon:<Event/>, path: "/event"},
        {id:2, title: "okolicznosci", describe:"takie jak lubisz", icon: <Birthday />, path: "/entertainment"},
        {id:3, title: "nagłośnienie", describe:"moc i jakość dżwięku", icon: <Volume />, path: "/sounds"},
        {id:4, title: "oświetlenie", describe:"nastrojowy klimat", icon: <Light/>, path: "/lights"},
        {id:5, title: "dodatki", describe:"moc atrakcji", icon:<Gift />, path: "/adding"}
    ],
    burgerToggle:false,
    burgerTogglerState: ()=>{},
}
export const NavigationContext = createContext(navigation)