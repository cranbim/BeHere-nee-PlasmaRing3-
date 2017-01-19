module.exports={
	//exportname: internalName
	ThemeRunner: ThemeRunner
};

var nextThemeId=0;

var themeLoader={
	ThemePlasma1: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeRepelWobble: {
		func: GenericServerTheme,
		ttl: 10
	},
	ThemeBounceRings: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeFlipper1: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemePsychaRing: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeBounceChain: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeSparker: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeDust: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeNoise1:	{
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeTVStatic: {
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeHairBall:	{
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeSwisher:	{
		func: GenericServerTheme,
		ttl: 6
	},
	ThemeCracker: {
		func: GenericServerTheme,
		ttl: 6
	}
};

function ThemeRunner(){
	var themes=[];
	var lastTheme=-1;
	var currentTheme=-1;
	var nextTheme=0;
	var nowTheme=null;
	var currentThemeName="";

	//var themeTTL=0;
	console.log("Theme Runner started");
	loadThemes();

	function loadThemes(){
		// themes[0]=new Theme(10);
		// themes[1]=new Theme(10);
		// themes[2]=new Theme(10);
		for(var key in themeLoader){
			themes.push(new themeLoader[key].func(key, themeLoader[key].ttl));
		}
	}

	this.getThemes=function(){
		var themeList=[];
		themes.forEach(function(t){
			themeList.push(t.id);
		});
		return themeList;
	};

	this.buildMetaData=function(){
		var meta={};
		meta.themes=[];
		themes.forEach(function(t){
			var theme={
				id: t.id,
				name: t.name,
				other: "stuff"
			};
			meta.themes.push(theme);
		});
		meta.current={
			index: currentTheme,
			ttl: nowTheme.ttl
		};
		return meta;
	};

	// this.run=function(){
	// 	if(!nowTheme){
	// 		return -1;
	// 	} else {
	// 		return currentTheme;
	// 	}
	// };

	this.run=function(){
		if(!nowTheme){
			switchTheme();
		}
		if(!nowTheme.run()){
			switchTheme();
			return currentTheme;
			// return currentThemeName;
		}
		return -1;
	};

	function switchTheme(){
		lastTheme=currentTheme;
		currentTheme=nextTheme;
		nextTheme++;
		if(nextTheme>=themes.length) nextTheme=0;
		nowTheme=themes[currentTheme];
		currentThemeName=nowTheme.name;
		console.log("Switch theme to" + currentThemeName);
		nowTheme.init();
	}
}


function GenericServerTheme(name, ttl){
	this.id=nextThemeId++;
	this.name=name;
	this.ttl=ttl;
	console.log("New Theme: "+this.id+" "+this.name);

	this.init=function(){
		this.ttl=ttl;
		console.log("Theme "+this.id+" loaded and initialised");
	};

	this.run=function(){
		this.ttl--;
		if(true/*this.ttl%10===0*/){
			console.log("Theme "+this.id+" ttl: "+this.ttl);
		}
		return this.ttl>0;
	};
}


// 