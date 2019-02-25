import Home from '../../components/pages/Home.vue';
import Leagues from '../../components/pages/Leagues.vue';
import OneLeague from '../../components/pages/OneLeague.vue';
import Players from '../../components/pages/Players.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/leagues', component: Leagues },
    { path: '/leagues/:leaguename', component: OneLeague },
    { path: '/players', component: Players },
];

export default routes;
