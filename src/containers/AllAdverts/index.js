import React from "react";
import Navbar from "../../components/Navbar";
import MainHeader from "../../components/MainHeader";
import Header from "../../components/Header";
import AdvertItem from "../../components/AdvertWrapper";
import PropTypes from "prop-types";
import { StyledWrapper } from "./styles";

class AllAdverts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novyObjekt: [
        {
          id: 1,
          title: "Predám niečo niekomu za dobru cenu",
          description:
            "Loremum ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus. Curabitur at venenatis enim. Curabitur tempus, nibh vel aliquam scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc. Morbi consequat massa at ex blandit, eu posuere nisi euismod. Quisque tincidunt, enim non auctor dictum, ligula dolor placerat risus, non dignissim quam est non eros. Fusce euismod vehicula semper. Aenean eleifend dui nec pretium interdum. Duis hendrerit orci ac erat tincidunt gravida.",
          price: "10"
        },
        {
          id: 2,
          title: "Predám niečo niekomu za dobru cenu ale ine ",
          description:
            "Loremum ipsum na druhu dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus. Curabitur at venenatis enim. Curabitur tempus, nibh vel aliquam scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc. Morbi consequat massa at ex blandit, eu posuere nisi euismod. Quisque tincidunt, enim non auctor dictum, ligula dolor placerat risus, non dignissim quam est non eros. Fusce euismod vehicula semper. Aenean eleifend dui nec pretium interdum. Duis hendrerit orci ac erat tincidunt gravida.",
          price: "10"
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const idParam = this.props.match.params.id;
    console.log(this.props.novyObjekt);
  }
  render() {
    return (
      <StyledWrapper>
        <Navbar />
        <div>
          {this.state.novyObjekt.map((item, index) => (
            <AdvertItem
              advertObjekt={item}
              poziciaVpoli={index}
              key={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </StyledWrapper>
    );
  }
}
export default AllAdverts;
