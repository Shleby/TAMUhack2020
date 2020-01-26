import React from "react";
import Header from "../components/Header";
import "./Data.css";

const CognitiveServicesCredentials = require("ms-rest-azure")
  .CognitiveServicesCredentials;
const WebSearchAPIClient = require("azure-cognitiveservices-websearch");
let credentials = new CognitiveServicesCredentials(
  "34db1d582a434adb873a7be2e634f682"
);
let webSearchApiClient = new WebSearchAPIClient(credentials);
class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: true, results: [] };
  }

  componentDidMount() {
    this.aiFunction();
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  aiFunction() {
    let result;
    webSearchApiClient.web
      .search("fires")
      .then(result => {
        let properties = ["images", "webPages", "news", "videos"];
        for (let i = 0; i < properties.length; i++) {
          if (result[properties[i]]) {
            this.setState({ results: result });
            console.log("div injected");
            return <div className="results">{this.state.results}</div>;
          } else {
            console.log(`No ${properties[i]} data`);
          }
        }
      })
      .catch(err => {
        throw err;
      });
    try {
      if (result.webPages.value.length > 0) {
        // find the first web page
        let firstWebPagesResult = result.webPages.value[0];
        if (firstWebPagesResult) {
          console.log("Webpage Results: " + result.webPages.value.length);
          console.log("First web page name: " + firstWebPagesResult.name);
          console.log("First web page URL: " + firstWebPagesResult.url);
        } else {
          console.log("Couldn't find web results!");
        }
      } else {
        throw new TypeError();
      }
    } catch (err) {
      if (err instanceof TypeError) {
        console.log("Didn't see any Web data..");
      } else {
        throw err;
      }
    }

    // Images
    try {
      if (result.images.value.length > 0) {
        // find the first image result
        let firstImageResult = result.images.value[0];
        if (firstImageResult) {
          console.log("Image Results: " + result.images.value.length);
          console.log("First Image result name: " + firstImageResult.name);
          console.log("First Image result URL: " + firstImageResult.contentUrl);
          return (
            <div>
              <img alt="first img" src={firstImageResult}></img>
            </div>
          );
        } else {
          console.log("Couldn't find image results!");
        }
      } else {
        throw TypeError();
      }
    } catch (err) {
      if (err instanceof TypeError) {
        console.log("Didn't see any Image data..");
      } else {
        throw err;
      }
    }

    // News
    try {
      if (result.news.value.length > 0) {
        // find the first news result
        let firstNewsResult = result.news.value[0];
        if (firstNewsResult) {
          console.log("News Results: " + result.news.value.length);
          console.log("First news result name: " + firstNewsResult.name);
          console.log("First news result URL: " + firstNewsResult.url);
        } else {
          console.log("Couldn't find news results!");
        }
      } else {
        throw new TypeError();
      }
    } catch (err) {
      if (err instanceof TypeError) {
        console.log("Didn't see any News data..");
      } else {
        throw err;
      }
    }

    // Videos
    try {
      if (result.videos.value.length > 0) {
        // find the first video result
        let firstVideoResult = result.videos.value[0];
        if (firstVideoResult) {
          console.log("Video Results: " + result.videos.value.length);
          console.log("First video result name: " + firstVideoResult.name);
          console.log("First video result URL: " + firstVideoResult.contentUrl);
        } else {
          console.log("Couldn't find video results!");
        }
      } else {
        throw new TypeError();
      }
    } catch (err) {
      if (err instanceof TypeError) {
        console.log("Didn't see any Video data..");
      } else {
        throw err;
      }
    }
  }

  render() {
    return (
      <div>
        <div className="Data">
          <Header className="stick" />
        </div>
      </div>
    );
  }
}

export default Data;
