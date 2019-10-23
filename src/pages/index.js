import React, { Component } from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron";
import items from "../components/items";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      selectItem: items[0],  
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({ selectItem: item });
  }

  render() {
    return (
      <Layout>
        <SEO title="二十年在地經營，與各大企業合作豐富，提供最好品質、最值得信賴的廣告夥伴"/>
        
        <p style={{ textAlign: `center`}}>我們提供多項服務、客製化產品，請點擊照片觀看更多實際案例</p>
        <Jumbotron item={this.state.selectItem} items={this.state.items} handleClick={this.handleClick}/>
        {/* <Photos item={this.state.selectItem} /> */}
      </Layout>
      
    );
  }
}
export default IndexPage
