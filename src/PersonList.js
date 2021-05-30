import React from "react";
import Person from "./Person";

export default class PersonList extends React.Component {
  render() {
    function compareNumbers(a, b) {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      return 0;
    }

    const employees = this.props.employees ? this.props.employees : [];
    const onActivityChange = this.props.onActivityChange;

    const employeeSorted = employees.sort(compareNumbers);

    const alphabetMap = new Map();

    function range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    }
    const alphabetArray = range(97, 122);

    for (let i = 0; i < alphabetArray.length; i++) {
      if (!alphabetMap.has(String.fromCharCode(alphabetArray[i]))) {
        alphabetMap.set(String.fromCharCode(alphabetArray[i]), []);
      }

      for (let j = 0; j < employeeSorted.length; j++) {
        if (
          employeeSorted[j].lastName[0].toLowerCase() ===
          String.fromCharCode(alphabetArray[i])
        ) {
          alphabetMap
            .get(String.fromCharCode(alphabetArray[i]))
            .push(employeeSorted[j]);
        }
      }
    }

    return (
      <div className="person-wrap">
        <div>
          {Array.from(alphabetMap.keys()).map((key) => {
            return (
              <div key={key}>
                <h2>{key}</h2>

                {alphabetMap.get(key).map((person) => {
                  return (
                    <Person
                      key={person.id}
                      isActive={false}
                      person={person}
                      onChange={($event) =>
                        onActivityChange(person.id, $event.target.value)
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
