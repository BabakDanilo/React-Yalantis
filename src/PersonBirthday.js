import React from "react";
import "./App.css";

export default class PersonBirthday extends React.Component {
  render() {
    const employees = this.props.employees ? this.props.employees : [];
    const employeesActivity = this.props.employeesActivity
      ? this.props.employeesActivity
      : {};

    const employeesActive = employees.filter((employee) => {
      return employeesActivity[employee.id];
    });

    const monthMap = new Map();

    var monthNames = [
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
    ];

    let dates = [];

    for (let i = 0; i < monthNames.length; i++) {
      if (!monthMap.has(String.fromCharCode(monthNames[i]))) {
        monthMap.set(monthNames[i], []);
      }
    }
    console.log(monthMap);
    let i = 0;
    for (let key in employeesActive) {
      let index = employeesActive.map((employe) =>
        parseInt(employe.dob.slice(5, 7))
      )[i];
      let year = employeesActive.map((employe) =>
        parseInt(employe.dob.slice(0, 4))
      )[i];
      let date = employeesActive.map((employe) =>
        parseInt(employe.dob.slice(8, 10))
      )[i];

      let month = monthNames[(index + 6) % 12];
      monthMap
        .get(month)
        .push(
          employeesActive[i].lastName +
            " " +
            employeesActive[i].firstName +
            " - " +
            date +
            " " +
            month +
            ", " +
            year
        );

      i++;
    }
    console.log(monthMap.get("March"));
    return (
      <div>
        {Array.from(monthMap.keys()).map((key) => {
          return (
            <div key={key}>
              <h2>{monthMap.get(key).length >= 1 ? key : null}</h2>
              {monthMap.get(key).map((person) => {
                return <li>{person}</li>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
