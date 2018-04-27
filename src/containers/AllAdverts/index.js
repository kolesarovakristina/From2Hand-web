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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus. Curabitur at venenatis enim. Curabitur tempus, nibh vel aliquam scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc. Morbi consequat massa at ex blandit, eu posuere nisi euismod. Quisque tincidunt, enim non auctor dictum, ligula dolor placerat risus, non dignissim quam est non eros. Fusce euismod vehicula semper. Aenean eleifend dui nec pretium interdum. Duis hendrerit orci ac erat tincidunt gravida.",
          price: "10"
        },
        {
          id: 2,
          title: "Predám niečo niekomu za dobru cenu2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus. Curabitur at venenatis enim. Curabitur tempus, nibh vel aliquam scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc. Morbi consequat massa at ex blandit, eu posuere nisi euismod. Quisque tincidunt, enim non auctor dictum, ligula dolor placerat risus, non dignissim quam est non eros. Fusce euismod vehicula semper. Aenean eleifend dui nec pretium interdum. Duis hendrerit orci ac erat tincidunt gravida.",
          price: "20"
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const idParam = this.props.match.params.id;
  }
  render() {
    return (
      <StyledWrapper>
        <Navbar />
        <div>
          {this.state.novyObjekt.map((prvokVpoli, index) => (
            <AdvertItem  
              advertObjekt={prvokVpoli}
              poziciaVpoli={index}
              key={prvokVpoli.id}
              to={`/dashboard/bigadvert`}
             />
          ))}
        </div>
      </StyledWrapper>
    );
  }
}
export default AllAdverts;
