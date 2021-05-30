import "./App.css";
import React from "react";
import axios from "axios";
import PersonList from "./PersonList";
import PersonBirthday from "./PersonBirthday";

class App extends React.Component {
  state = {
    employees: [],
    employeesActivity: {},
  };

  componentDidMount() {
    axios
      .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
      .then((res) => {
        const employees = res.data;
        this.setState({ ...this.state, employees });
      });
  }

  onActivityChange(id, value) {
    let employeesActivity = { ...this.state.employeesActivity };
    employeesActivity[id] = value === "true" ? true : false;

    this.setState({
      ...this.state,
      employeesActivity,
    });
  }

  render() {
    console.log(PersonBirthday);
    return (
      <div className="App">
        <div class="container">
          <h1>Employees</h1>
          <PersonList
            employees={this.state.employees}
            onActivityChange={(id, value) => this.onActivityChange(id, value)}
          />
        </div>
        <div class="container">
          <h1>Employees Birthday</h1>
          {
            <PersonBirthday
              employees={this.state.employees}
              employeesActivity={this.state.employeesActivity}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
