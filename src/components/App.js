import './styles.css';
import Sidebar from './Sidebar';
import './App.css';

function App() {
	return (
		<div className='navbar'>
			<div className='App' id='outer-container'>
				<Sidebar pageWrapId={'page-wrap'} outerContainer={'outer-container'} />
				<div id='page-wrap'></div>
			</div>
			<h1 className='center-h pl-5 '>F1-Tracker</h1>
		</div>
	);
}

export default App;
