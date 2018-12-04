import React,{Component} from "react";
import ReactDataGrid from "react-data-grid";
import "./dashboard.css";

const columns = [
  { key: "emp_name", name: "Employee Name", editable: true },
  { key: "emp_number", name: "Employee Number", editable: true },
  { key: "applicant", name: "Applicant Name", editable: true },
  { key: "position", name: "Position", editable: true },
  { key: "hr_spoc", name: "HR Spoc Name", editable: true }
];

const rows = [
  { emp_number: 0, emp_name: "Task 1", applicant: 20,position:"software engineer",hr_spoc:"pravitha" },
  { emp_number: 1, emp_name: "Task 2", applicant: 40,position:"SR.Software Engineer",hr_spoc:"pravitha" },
  { emp_number: 2, emp_name: "Task 3", applicant: 60,position:"software engineer",hr_spoc:"pravitha" }
];

export default class DashBoard extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  goBack=()=>{
    this.props.history.push('/newentry');
  }

  render() {
    return (
      <div>
      <button onClick={this.goBack} className="btn btn-primary">Back</button>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={5}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
      </div>
    );
  }
}
