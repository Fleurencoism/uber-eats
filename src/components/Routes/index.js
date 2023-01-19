import{Route, Routes} from "react-router-dom";
import CreateMenuItem from "../modules/CreateMenuItem";
import CreateRestaurant from "../modules/CreateRestaurant";
import DeatailedOrder from "../modules/DetailedOrder";
import Orders from "../modules/Orders";
import RestaurantMenu from "../modules/RestaurantMenu";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Orders/>}/>
            <Route path="/" element={<DeatailedOrder/>}/>
            <Route path="/" element={<RestaurantMenu/>}/>
            <Route path="/" element={<CreateMenuItem/>}/>
            <Route path="/" element={<CreateRestaurant/>}/>
        </Routes>
    )

}
export default AppRoutes;