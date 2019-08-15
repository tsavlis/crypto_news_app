import { combineReducers } from "redux";
import News from "./news_reducer";
import Games from "./games_reducer";

const rootReducer = combineReducers({
  News,
  Games
});

export default rootReducer;
