import React from "react";
import Title from "../../components/Title";
import Recenzia from "../../components/Recenzia";

class AboutPage extends React.Component {
  state = {
    novyObjekt: [
      {
        id: 1,
        title: "Predám niečo niekomu za dobru cenu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus. Curabitur at venenatis enim. Curabitur tempus, nibh vel aliquam scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc. Morbi consequat massa at ex blandit, eu posuere nisi euismod. Quisque tincidunt, enim non auctor dictum, ligula dolor placerat risus, non dignissim quam est non eros. Fusce euismod vehicula semper. Aenean eleifend dui nec pretium interdum. Duis hendrerit orci ac erat tincidunt gravida.",
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
