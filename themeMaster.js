module.exports={
	//exportname: internalName
	ThemeMaster: ThemeMaster
};

function ThemeMaster(){

	this.narrative1={
		sequence: [
			{name: 'ThemeCountdown', duration: 5, params:{beat:true}},
			{name: 'ThemeFlowDraw', duration: 15, params:{seed:13}},
			// {name: 'ThemeCalmRings', duration: 8, params:{}},
			// {name: 'ThemePlasma1', duration: 8, params:{}},
			// {name: 'ThemeTVStatic', duration: 8, params:{}},
			// {name: 'ThemeSpark', duration : 8, params: {}},
			// {name: 'ThemeStrings', duration: 8, params: {}},
			// {name: 'ThemeHairBall', duration: 8, params:{}},
			// {name: 'ThemeFlyThrough', duration: 8, params:{}},
			// {name: 'ThemeFlipper1', duration: 8, params:{}},
			// {name: 'ThemePsychaRing', duration: 8, params:{}},
			// {name: 'ThemeBounceChain', duration: 8, params:{}},
			// {name: 'ThemeSparker', duration: 8, params:{}},
			// {name: 'ThemeSwisher', duration: 8, params:{}},
			{name: 'ThemeHoneyCombLight', duration: 10, params:{}},
			{name: 'ThemeTextScroller', duration: 20, params: {/*resetParamLoop: true,*/ messages:["... ...Life is Good... ", "test2"]}},
			{name: 'ThemeCalmRings', duration: 5, params:{}},
			{name: 'ThemeTextScroller', duration: 20, params: {/*resetParamLoop: true,*/ messages:["... ...Save Me from Myself... ", "test2"]}},
			// {name: 'ThemeTheyGrowBack', duration: 15, params:{}},
			// {name: 'ThemeRepelWobble', duration: 8, params:{}},
			// {name: 'ThemeCracker', duration: 8, params:{}},
			// {name: 'ThemeDust', duration : 8, params: {}},
			// {name: 'ThemeNoise1', duration : 8, params: {}},
			// {name: 'ThemeBounceRings', duration : 8, params: {}},
		]
	};

	this.themeLoader=[
		"ThemeDefault",
		"ThemePlasma1",
		"ThemeFlyThrough",
		"ThemeRepelWobble",
		"ThemeBounceRings",
		"ThemeFlipper1",
		"ThemePsychaRing",
		"ThemeBounceChain",
		"ThemeSparker",
		"ThemeSpark",
		"ThemeDust",
		"ThemeNoise1",
		"ThemeTVStatic",
		"ThemeHairBall",
		"ThemeSwisher",
		"ThemeCracker",
		"ThemeStrings",
		"ThemeTextScroller",
		"ThemeTheyGrowBack",
		"ThemeCountdown",
		"ThemeFlowDraw",
		"ThemeCalmRings",
		"ThemeHoneyCombLight"
	];


}
