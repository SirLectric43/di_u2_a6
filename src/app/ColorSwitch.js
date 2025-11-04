export default function ColorSwitch({ onChangeColor }) {
  function handleClick(event) {
    event.stopPropagation(); 
    onChangeColor();         
  }

  return (
    <button onClick={handleClick}>
      Cambiar color
    </button>
  );
}
