import useToggle from "./useToggle";

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle(false);
    return (
        <div>
            <div>{value.toString()}</div>
            <div onClick={toggleValue}>Toggle</div>
            <div onClick={() => toggleValue(true)}>Make True</div>
            <div onClick={() => toggleValue(false)}>make False</div>
        </div>
    )
}
export default ToggleComponent;