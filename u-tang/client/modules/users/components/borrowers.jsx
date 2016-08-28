import React from 'react';import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {TextField, Dialog, FlatButton} from 'material-ui';

class Borrowers extends React.Component {
  constructor(props) {
    super(props);
  }

  generate(data,index){
    return(
      <TableRow key={index}>
        <TableRowColumn>{data.userId}</TableRowColumn>
        <TableRowColumn>{data.amount}</TableRowColumn>
        <TableRowColumn>{data.message}</TableRowColumn>
        <TableRowColumn>
          <FlatButton
            type="submit"
            label="Borrow"
            primary={true}
          />
        </TableRowColumn>
      </TableRow>
    )
  }

  render() {
    let {data} = this.props;
    return (
      <section className="Borrowers">
        <div>Borrowers Page</div>

        <Table id="enrollTableAll">
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Loaner ID</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Message</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((borrower , index)=>(
              this.generate(borrower, index)
            ))}
          </TableBody>
        </Table>
      </section>
    );
  }
}

export default Borrowers;
