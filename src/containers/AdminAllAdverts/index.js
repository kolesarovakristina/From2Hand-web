import React from "react";
import { StyledWrapper } from "./styles";
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class AdminAllAdverts extends React.Component {

    state = {
        allAdverts: []
      }
    
      componentWillMount() {
        this.fillStateAllAdverts();
      }


    
      fillStateAllAdverts = async () => {
          try {
              const response = await axios({
                method: "get",
                url: `/advert/all`,
                config: { headers: { "Content-Type": "application/json" } }
              });
              this.setState({ allAdverts: response.data}, () => {
                  console.log(this.state.allAdverts);
              });
          } catch (err) {
              console.log(err);
          }
      };

    render() {
        const keyBoardNav = {
            enterToEdit: true
          };

        return(
            <StyledWrapper>
                <BootstrapTable ref='table' data={this.state.allAdverts} pagination={ true }>
                    <TableHeaderColumn isKey dataField='id' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='descr' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='city' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>City</TableHeaderColumn>
                </BootstrapTable>
            </StyledWrapper>
        );
    }
}
export default AdminAllAdverts;





