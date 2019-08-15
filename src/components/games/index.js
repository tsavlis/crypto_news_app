import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { getNews } from "../../store/actions/games_actions";
import Articles from "./Articles";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <React.Fragment>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Articles article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Games: state.Games
  };
};

export default connect(mapStateToProps)(Games);
