import React, {useEffect, useState} from 'react';
import axios from "axios";
import Person from "../../components/Person";

const Checklist = () => {
  const [people, setPeople] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])
  const [type, setType] = useState("")

  const handleInputAll = (e) => {
      setIsCheckedAll(e.target.checked)
    setType("all")
    if(e.target.checked){
      setSelectedPeople(people)
    } else
      {setSelectedPeople([])}
    }

  useEffect(() => {
    axios("https://6145fd4a38339400175fc7af.mockapi.io/checklist")
      .then(({data}) => setPeople(data))
  }, [])

  return (
    <>
      <h3 className="text-center mt-3 title">List of employees</h3>
      <table border="1" className="table my-5 table-bordered table-striped my-3" cellPadding="15" width="600px"
             cellSpacing="0">
        <thead>
        <tr valign="center">
          <th><input type="checkbox" checked={isCheckedAll} onChange={handleInputAll} className="me-3"/>Check all</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
        {
          people.map(el =>
            <Person key={el.id} el={el} people={people} type={type} setType={setType}  isCheckedAll={isCheckedAll} setIsCheckedAll={setIsCheckedAll}   selectedPeople={selectedPeople} setSelectedPeople={setSelectedPeople} />
          )}
        </tbody>
      </table>
      <div>{selectedPeople.map(el=>
      <span>{el.name}, </span>)}</div>
    </>
  )};

export default Checklist;