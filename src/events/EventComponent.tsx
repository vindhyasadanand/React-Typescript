
const EventComponent: React.FC = () =>{

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };
    const onDragStart = () => {
        console.log('am dragged')
    }

    return (
    <div>
        <input onChange={onChange}></input>
        <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
    )
};

export default EventComponent;