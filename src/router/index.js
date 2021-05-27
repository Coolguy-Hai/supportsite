import Vue from 'vue'
import Router from 'vue-router'
import Questions from "../components/Questions";
import Contact from "../components/Contact";
import Download from "../components/Download";
import DownloadBroser from "../components/DownloadBrowser"
import DownloadAssisting from "../components/DownloadAssisting"
import System1 from "../components/contacts/System1"
import System2 from "../components/contacts/System2"
import System3 from "../components/contacts/System3"
import System4 from "../components/contacts/System4"
import System5 from "../components/contacts/System5"
import System6 from "../components/contacts/System6"
import System7 from "../components/contacts/System7"
import System8 from "../components/contacts/System8"
import System9 from "../components/contacts/System9"
import Solution1 from "../components/solutions/Solution1";


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/questions',
  		component: Questions
  	},
  	{
  		path: '/contact',
  		component: Contact
  	},
  	{
  		path: '/download',
  		component: Download
  	},
  	{
  		path: '/downloadbrowser',
  		component: DownloadBroser
  	},
  	{
  		path: '/contacts/system1',
  		component: System1
  	},
  	{
  		path: '/contacts/system2',
  		component: System2
  	},
  	{
  		path: '/contacts/system3',
  		component: System3
  	},
  	{
  		path: '/contacts/system4',
  		component: System4
  	},
  	{
  		path: '/contacts/system5',
  		component: System5
  	},
  	{
  		path: '/contacts/system6',
  		component: System6
  	},
  	{
  		path: '/contacts/system7',
  		component: System7
  	},
  	{
  		path: '/contacts/system8',
  		component: System8
  	},
  	{
  		path: '/contacts/system9',
  		component: System9
  	},
  	{
  		path: '/downloadassisting',
  		component: DownloadAssisting
  	},
  	{
  		path: '/solution1',
  		component: Solution1
  	}
  ]
})
