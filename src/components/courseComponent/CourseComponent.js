import React,{Component} from 'react';
import {Panel,PanelGroup} from 'react-bootstrap';
import {courseLists} from '../../utils/constants';
import './Course.css';

export default class CourseComponent extends Component{
    constructor(props){
        super(props);
        this.state={forms:null,javascript:null};
    }

    onChangeValue=(e)=>{
        const value=e.target.value;
        let rating={name:e.target.name,value:e.target.value}
        this.setState({[rating.name]:rating.value});
        this.props.getRating(rating);
    }

    renderCourses=(sections)=>{
        return sections.map((section)=>(
            <div className="formdata">
                <b>{section.name}</b>
              <tr key={section.name}>
                <td>
                    <label className="radio-inline">
                        <input type="radio" name={section.value} value="excellent" onChange={this.onChangeValue} checked={this.state[section.value]==="excellent"}/>
                        Excellent
                    </label>
                </td>
                <td>
                    <label className="radio-inline">
                        <input type="radio" name={section.value} value="good" onChange={this.onChangeValue} checked={this.state[section.value]==="good"}/>
                        Good
                    </label>
                </td>
                <td>
                    <label className="radio-inline">
                        <input type="radio" name={section.value} value="average" onChange={this.onChangeValue} checked={this.state[section.value]==="average"}/>
                        Average
                    </label>
                </td>
                <td>
                    <label className="radio-inline">
                        <input type="radio" name={section.value} value="unabletoanswer" onChange={this.onChangeValue} checked={this.state[section.value]==='unabletoanswer'}/>
                        Unable to Answer
                    </label>
                </td>
              </tr>
            </div>
        ));
    }

    render(){
        return(
          <div className="col-sm-12">
          <PanelGroup accordion id="accordion-example">
            {courseLists.map((courselist,index)=>(
            <Panel eventKey={index}>
                <Panel.Heading>
                <Panel.Title toggle>{courselist.name.toUpperCase()}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    {this.renderCourses(courselist.section)}
                </Panel.Body>
            </Panel>
            ))
            }
          </PanelGroup>
            {/* <table className="table table-bordered">
               <thead>
                 <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
               </thead>
               <tbody>
                 {this.renderCourses()}
               </tbody>
            </table> */}
          </div>
        );
    }
}