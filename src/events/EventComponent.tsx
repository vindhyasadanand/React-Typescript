
const EventComponent: React.FC = () =>{

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    return (
    <div>
        <input onChange={onChange}></input>
    </div>
    )
};

export default EventComponent;