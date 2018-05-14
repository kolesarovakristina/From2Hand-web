import React from "react";
import AdvertWrapper from "../../components/MyAdvert";
import PropTypes from "prop-types";
import { StyledWrapper } from "./styles";

class AllUserAdverts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novyObjekt: [
        {
          id: 1,
          title: "Predám niečo niekomu za dobru cenu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis." +
            "Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed.",
          price: "10",
          location: "Košice"
        },
        {
          id: 2,
          title: "Predám niečo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. " +
            "Vestibulum scelerisque vulputate convallis. Integer quis mauris pretium, faucibus risus sed, egestas purus. Curabitur at " +
            "venenatis enim. Curabitur tempus, nibh vel aliquam scelerisque, arcu dolor finibus ex, ut iaculis ex ex nec nunc.",
          price: "20",
          location: "Sabinov"
        },
        {
          id: 3,
          title: "Predám niečo niekomu",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget fringilla arcu, vel lobortis turpis. Vestibulum " +
            "scelerisque vulputate convallis. Integer.",
          price: "44",
          location: "Prešov"
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
          {this.state.novyObjekt.map((prvokVpoli, index) => (
            <AdvertWrapper
              title={prvokVpoli.title}
              description={prvokVpoli.description}
              price={prvokVpoli.price + "€"}
              location={prvokVpoli.location}
              poziciaVpoli={index}
              id={prvokVpoli.id}
            />
          ))}
      </StyledWrapper>
    );
  }
}
export default AllUserAdverts;