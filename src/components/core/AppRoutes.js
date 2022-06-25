import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import ProgramOverview from '../pages/program/ProgramOverview';
import ProgramEdit from '../pages/program/ProgramEdit';
import Schedule from '../pages/schedule/Schedule';

const Routes = [
	{
    	path: '',
		element: <Home />
	},
	{
    	path: '/profile',
		element: <Profile />
	},
	{
    	path: '/program',
		element: <ProgramOverview />
	},
	{
    	path: '/program/edit',
		element: <ProgramEdit />
	},
	{
    	path: '/schedule',
		element: <Schedule />
	}
];

export default Routes;
