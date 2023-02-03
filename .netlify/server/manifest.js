export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["digicalestate.png","favicon.png","home5.jpg","home7.jpg","images1.jpg","images2.jpg","images3.jpg","images4.jpg","loading.svg","location.svg","Navlogo.png","RightArrow.svg","search.svg","wave.svg","waveFooter.svg","whatIsDigicalestate.jpg","whatIsDigicalestate2.jpg","whatIsDigicalestate3.jpg","whyus1.svg","whyus2.svg","whyus3.svg","whyus4.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-c79b3766.js","imports":["_app/immutable/start-c79b3766.js","_app/immutable/chunks/index-b441f985.js","_app/immutable/chunks/singletons-a3a1a621.js","_app/immutable/chunks/index-1f1d0ccc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
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
				id: "/search/Flat",
				pattern: /^\/search\/Flat\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/search/House",
				pattern: /^\/search\/House\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/search/Plot",
				pattern: /^\/search\/Plot\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[propertyId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"propertyId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
