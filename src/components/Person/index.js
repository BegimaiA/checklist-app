import React, {useEffect, useState} from 'react';

const Person = ({el, people, isCheckedAll,setIsCheckedAll, setSelectedPeople, selectedPeople, type, setType}) => {
const [isChecked, setIsChecked] = useState(false)
  
  
 useEffect(()=>{
   if(people.length===selectedPeople.length){
     setType("all")
     setIsCheckedAll (true)
   } else{
     setType("one")
     setIsCheckedAll(false)
   }
   
 }, [people.length, selectedPeople.length, setIsCheckedAll, setType])

  useEffect(()=> {
    if(type==="all") {
      setIsChecked(isCheckedAll)
    }
  },[isCheckedAll,type])

  const handleInput = (e)=> {
    setIsChecked(e.target.checked)
      if (e.target.checked ) {
      setSelectedPeople([...selectedPeople, el])
    } else {
      setSelectedPeople(selectedPeople.filter(item=>item.id !==el.id))
      }
  }
  


  return (
      <tr key={el.id}>
        <td><input type="checkbox"  onChange={handleInput}  name={el.name} checked={isChecked}/>
        </td>
        <td> {el.name}</td>
        <td> {el.surname}</td>
        <td> {el.age}</td>
      </tr>
  );
};

export default Person;