import { Item } from "./Item";

export const List = () => {
	return (
		<>
			<h1>Minha Lista</h1>
			<ul>
				<Item marca="Ferrari"/>
				<Item marca="Fiat"/>
				<Item marca="Ford"/>
				<Item marca="Chrevrolet"/>
				<Item marca="Honda"/>
				<Item marca="Wolksvagen"/>
			</ul>
		</>
	);
}