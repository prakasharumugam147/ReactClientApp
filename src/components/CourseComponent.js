import React,{Component} from 'react';

const courseLists=[
    {
        name:"Angular2/4/5/6",
        value:"angular"
    },
    {
        name:"Javascript/OOJS",
        value:"javascript"
    },
    {
        name:"HTML 5",
        value:"html"
    },
    {
        name:"CSS3/Responsive Design/Bootstrap",
        value:"css"
    },
    {
        name:"Testing Tool - Jasmine/Karma",
        value:"testingtool"
    },
    {
        name:"Sub Version- SVN,GIT",
        value:"subversion"
    }
]

export default class CourseComponent extends Component{
    constructor(props){
        super(props);
        this.state={selected:null};
    }

    onChangeValue=(e)=>{
        const val=e.target.value.substr(0,e.target.value.length-1);
        this.setState({[val]:e.target.value});
    }

    renderCourses=()=>{
        return courseLists.map((course)=>(
            <tr key={course.name}>
            <td>{course.name}</td>
            <td>
                <label className="radio-inline">
                    <input type="radio" name={course.value} value={`${course.value}1`} onChange={this.onChangeValue} checked={this.state[course.value]===`${course.value}1`}/>
                </label>
            </td>
            <td>
                <label className="radio-inline">
                    <input type="radio" name={course.value} value={`${course.value}2`} onChange={this.onChangeValue} checked={this.state[course.value]===`${course.value}2`}/>
                </label>
            </td>
            <td>
                <label className="radio-inline">
                    <input type="radio" name={course.value} value={`${course.value}3`} onChange={this.onChangeValue} checked={this.state[course.value]===`${course.value}3`}/>
                </label>
            </td>
            <td>
                <label className="radio-inline">
                    <input type="radio" name="angular" value={`${course.value}4`} onChange={this.onChangeValue} checked={this.state[course.value]===`${course.value}4`}/>
                </label>
            </td>
            <td>
                <label className="radio-inline">
                    <input type="radio" name={course.value} value={`${course.value}5`} onChange={this.onChangeValue} checked={this.state[course.value]===`${course.value}5`}/>
                </label>
            </td>
        </tr>
        ));
    }
    render(){
        return(
          <div className="col-sm-12">
            <table className="table table-bordered">
               <thead>
                 <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
               </thead>
               <tbody>
                 {this.renderCourses()}
               </tbody>
            </table>
          </div>
        );
    }
}