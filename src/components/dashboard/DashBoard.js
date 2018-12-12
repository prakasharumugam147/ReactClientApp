import React,{Component} from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./dashboard.css";

const columns = [
  {
    dataField: 'emp_number',
    text: 'Employee Number',
    sort: true
  },
  {
    dataField: 'emp_name',
    text: 'Employee Name',
    sort: true
  },
  {
    dataField: 'spocname',
    text: 'HR Spoc Name',
    sort: true
  },
  {
    dataField: 'position',
    text: 'Position',
    sort: true
  },
  {
    dataField: 'applicantname',
    text: 'Candidate Name',
    sort: true
  },
  {
    dataField: 'recommendation',
    text: 'Recommendation',
    sort: true
  }];

class DashBoard extends Component {
  constructor(props){
    super(props);
    this.state={rows:null,columns,loading:false}
  }

  componentDidMount(){
    axios.get('http://localhost:3000/').then((response)=>{
      console.log(response);
      const rows=response.data.data.rows.map((row)=>{
        return row.value
      });
      console.log(rows);
      this.setState({rows,loading:true})
    }).catch((error)=>{
      console.log(error);
    })
  }

  goBack=()=>{
    this.props.history.push('/newentry');
  }

  render() {
    const { ExportCSVButton } = CSVExport;
    return (!this.props.isAuthenticated) ?
    <Redirect to="/login"/>
    :
    (
      <div>
      <button onClick={this.goBack} className="btn btn-primary">Form</button>
      {this.state.loading ? 
        (<ToolkitProvider
        keyField="id"
        data={ this.state.rows }
        columns={ columns }
        exportCSV
      >
        {
          props => (
            <div>
              <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
              <BootstrapTable { ...props.baseProps } />
            </div>
          )
        }
      </ToolkitProvider>)
        :
        <div>Loading</div>}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    isAuthenticated:state.loginreducer.isAuthenticated
  }
}

export default connect(mapStateToProps,null)(DashBoard);