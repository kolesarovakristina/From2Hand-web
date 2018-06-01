import React from "react";
import { StyledWrapper } from "./styles";
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { TableWrapper } from "../AdminDashboard/styles";
import deleteButton from '../../assets/delete.png';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

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

      deleteAdvert = async (id) => {
        console.log(id);
		try {
			const response = await axios({
				method: 'delete',
				url: `/advert/${id}`,
				config: { headers: { 'Content-Type': 'application/json' } }
			});
            window.location.reload();
		} catch (err) {
            console.log(err);
            alert('Error');
		}
      }

      deleteCell = (cell, row) => {
        return (
          <div
            onClick={() => {
                // this.deleteAdvert(row.id);
                confirmAlert({
                    title: 'Confirm to delete',
                    message: 'Are you sure delete this advert?',
                    buttons: [
                      {
                        label: 'Yes',
                        onClick: () => this.deleteAdvert(row.id)
                      },
                      {
                        label: 'No',
                        onClick: () => window.location.reload()

                      }
                    ]
                  })
            }}
          >
          <img style={{width: 25, cursor:'pointer'}} src={deleteButton} />
          </div>
        );
      }

    render() {
        const keyBoardNav = {
            enterToEdit: true
          };

        return(
            <StyledWrapper>
                <TableWrapper>
                    <BootstrapTable id='table' ref='table' data={this.state.allAdverts} pagination={ true }>
                        <TableHeaderColumn isKey dataField='id' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='price' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='descr' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>Description</TableHeaderColumn>
                        <TableHeaderColumn dataField='district' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>District</TableHeaderColumn>
                        <TableHeaderColumn dataField='cityDistrict' dataSort={ true } filter={ { type: 'TextFilter', delay: 1000 } }>City </TableHeaderColumn>
                        <TableHeaderColumn dataField='id' dataFormat={this.deleteCell}>Delete</TableHeaderColumn>
                    </BootstrapTable>
                </TableWrapper>
            </StyledWrapper>
        );
    }
}
export default AdminAllAdverts;





