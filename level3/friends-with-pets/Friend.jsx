import Pet from "./Pet"

export default function Friend(props){
    const petList = props.pet.map(item =>{
        return (
            <Pet 
            item = {item}
            />
        )
    })
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            {petList}
            <hr />
        </div>
    )
}


