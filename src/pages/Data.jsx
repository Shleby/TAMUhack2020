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
    this.state = { showPopup: true, newsString: "", fireImage: "" };
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
        let properties = ["images", "news"];
        for (let i = 0; i < properties.length; i++) {
          if (result[properties[i]]) {
            this.setState({ newsString: result.news.value[0].name });
            this.setState({ fireImage: result.images.value[0].contentUrl });
            console.log(result.images.value[0]);
            console.log(this.state.newsString);
          } else {
            console.log(`No ${properties[i]} data`);
          }
        }
      })
      .catch(err => {
        throw err;
      });
    // Images
    try {
      if (result.images.value.length > 0) {
        // find the first image result
        let firstImageResult = result.images.value[0];

        if (firstImageResult) {
          console.log("Image newsString: " + result.images.value.length);
          console.log("First Image result name: " + firstImageResult.name);
          console.log("First Image result URL: " + firstImageResult.contentUrl);
        } else {
          console.log("Couldn't find image newsString!");
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
          console.log("News newsString: " + result.news.value.length);
          console.log("First news result name: " + firstNewsResult.name);
          console.log("First news result URL: " + firstNewsResult.url);
        } else {
          console.log("Couldn't find news newsString!");
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
  }

  render() {
    return (
      <div>
        <div className="Data">
          <Header className="stick" />
          <p>{this.state.newsString}</p>
          <img src={this.state.fireImage} alt="fire" />
        </div>
      </div>
    );
  }
}

export default Data;
