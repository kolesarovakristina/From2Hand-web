import React from "react";
import Title from "../../components/Title";
import Recenzia from "../../components/Recenzia";

class AboutPage extends React.Component {
  state = {
    novyObjekt: [
      {
        id: 1,
        title: "title",
        description: "description",
        price: "10",
      },
      {
        id: 2,
        title: "title2",
        description: "description2",
        price: "20",
      },
      {
        id: 3,
        title: "title2",
        description: "description2",
        price: "20",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.novyObjekt.map((prvokVpoli, index) => (
          <Recenzia recenziaObjekt={prvokVpoli} poziciaVpoli={index} key={prvokVpoli.id} />
        ))}
      </div>
    );
  }
}

export default AboutPage;
