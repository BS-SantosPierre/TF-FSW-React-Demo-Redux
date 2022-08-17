import { useSelector } from "react-redux";

const Header = () => {
	const count = useSelector((state) => state.counter.count);

	return <header>
		<p>{count}</p>
	</header>
}

export default Header;
