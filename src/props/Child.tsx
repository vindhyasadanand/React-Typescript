interface ChildProps {
    color: string
}

const Child = ({color}: ChildProps) => {
  
    return <div>{color}</div>

}

const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>
}

/*const ChildAsFC: React.FunctionComponent<ChildProps> = ({color}) => {
    return <iv>{color}</iv>
}
*/
export default Child;