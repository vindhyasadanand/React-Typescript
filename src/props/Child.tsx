interface ChildProps {
    color: string
    onClick: () => void;
}

const Child = ({color,onClick}: ChildProps) => {
  
    return <div>
        {color}
    <button onClick={onClick}>Click me</button>
    </div>

}

const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>{color}
    <button onClick={onClick}>Click Me</button>
    </div>
}

/*const ChildAsFC: React.FunctionComponent<ChildProps> = ({color}) => {
    return <iv>{color}</iv>
}
*/
export default Child;