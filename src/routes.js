import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import News from "./components/news";
import Article from "./components/news/article";
import Games from "./components/games";
import Ionicons from "react-native-vector-icons/Ionicons";

const headerConf = {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#001338"
    },
    headerTintColor: "white",
    headerTitle: "CryptoNews"
  }
};
const NewsStack = createStackNavigator(
  {
    News: News,
    Article: Article
  },
  headerConf
);

const GameStack = createStackNavigator(
  {
    Games: Games
  },
  headerConf
);
const AppStack = createBottomTabNavigator(
  {
    News: NewsStack,
    Games: GameStack
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      showLabel: false,
      activeBackgroundColor: "#00194b",
      inactiveBackgroundColor: "#001338",
      style: {
        backgroundColor: "#001338"
      }
    },
    initialRouteName: "News",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: (focused, horizontal, tintColor) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "News") {
          iconName = `logo-bitcoin`;
        } else if (routeName === "Games") {
          iconName = `md-tv`;
        }

        return <Ionicons name={iconName} size={25} color={"#fff"} />;
      }
    })
  }
);

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack
      },
      { initialRouteName: "App" }
    )
  );
};
