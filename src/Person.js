import React from "react";
import "./App.css";

export default class Person extends React.Component {
  render() {
    let className = "employee";

    let { person, isActive, onChange } = this.props;

    const fullName = person.lastName + " " + person.firstName;
    
     function changed(value){
      let x = value;
      className += x ? " employee-active" : "";
      console.log(className)
    }


    return (
      <div onChange={onChange}>
        <h4 className={className}>{fullName}</h4>
        <input type="radio" value="true" name={person.id} onChange = {changed(true)} />
        active
        <input type="radio" value="false" name={person.id}  />
        not active
      </div>
    );
  }
}
