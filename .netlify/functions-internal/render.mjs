import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["digicalestate.png","favicon.png","home5.jpg","home7.jpg","images1.jpg","images2.jpg","images3.jpg","images4.jpg","location.svg","Navlogo.png","RightArrow.svg","search.svg","wave.svg","waveFooter.svg","whatIsDigicalestate.jpg","whatIsDigicalestate2.jpg","whatIsDigicalestate3.jpg","whyus1.svg","whyus2.svg","whyus3.svg","whyus4.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-4afb7685.js","imports":["_app/immutable/start-4afb7685.js","_app/immutable/chunks/index-a83326d8.js","_app/immutable/chunks/singletons-3bbbeb29.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[propertyId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"propertyId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
