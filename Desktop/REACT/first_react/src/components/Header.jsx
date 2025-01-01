function Header()
{
    let name="Shriya";
    let student={
        id:101,
        name: "Shriya"
    }
    return (
        <div>
        <h1>Hii I am header component {name}</h1>
        <p>Student id:{student.id}</p>
        <p>Student name:{student.name}</p>
        </div>
    );

}

export default Header;