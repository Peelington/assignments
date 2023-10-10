import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")
//1. Pass in a new color of your choosing in place of the old one.
  setColor('blue')
//2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
  const [color, setColor] = useState("pink")
    setColor(preColor => preColor === "pink" ? "blue" : "pink")

//3. Add a new person object to the following people array in state. 
//You can hard-code a new object but it must be a person object with firstName and lastName properties.
const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevPeople => (
  [ ...prevPeople,
    {
      firstName: "",
      lastName: ""
    }
  ]
))

//4. Change the following state-setting functions to use an implicit return
//A
  const [colors, setColors] = useState(["pink", "blue"])

  setColors(prevColors => [...prevColors, "green"])
//B
const [countObject, setCountObject] = useState({
	count: 0
})
setCountObject(precount => precount.count + 1)

setCountObject(prevState => ({count: prevState.count + 1}))
//5. Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
  })

  setPerson(prevPerson => ({
    ...prevPerson,
    age: 30
  }))

  //6.What’s wrong with the following state update?
  //it would change colors from a string to an array and also modifiy the original array


//   return (
//     <>
//     <div className="divColor">
//       <p>Hi</p>
//     </div>

//     </>
//   )
// }

export default App
