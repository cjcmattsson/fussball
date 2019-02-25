import Home from '../../components/pages/Home.vue';
import Leagues from '../../components/partials/Leagues.vue';
import OneLeague from '../../components/pages/OneLeague.vue';
import RegisterNewPlayer from '../../components/partials/RegisterNewPlayer.vue';
import Players from '../../components/partials/Players.vue';
import CreateLeague from '../../components/partials/CreateLeague.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/leagues', component: Leagues },
    { path: '/leagues/:leaguename', component: OneLeague },
    { path: '/register-player', component: RegisterNewPlayer },
    { path: '/create-league', component: CreateLeague },
    { path: '/players', component: Players },
];

export default routes;
