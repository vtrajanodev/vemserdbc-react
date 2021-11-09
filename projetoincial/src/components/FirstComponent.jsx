import { SecondComponent } from "./SecondComponent";

export function FirstComponent(props) {
  return (
    <div>
      <h1>Meu primeiro compronente</h1>
      <SecondComponent name={props.name}/>
    </div>
  );  
}