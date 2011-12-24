var eol = 'win32' == require('os').platform() ? '\r\n' : '\n';
module.exports ={
  http:{
      host : 'cns-812',
      port : 8111,
      method : 'GET'
  },
  appdir:"/bin,/lib",
  ce_list:['less','stylus'],
  he_list:['jade','coffee','mustache','underscore','jshtml','ejs'],
  st_list:['mvc','mvvm','mvp','requireBackbone'],
  dir:{
    base:"/css,/imgs,/script,/script/lib,/tpl",
    mvc:"/css,/imgs,/script,/script/models,/script/views,/script/contrllers",
	mvvm:"/css,/imgs,/script,/script/models,/script/viewModels,/script/views",
	mvp:"/css,/imgs,/script,/script/models,/script/views,/script/presenter",
	requireBackbone:"/css,/imgs,/script,"+
             "/script/models,/script/views,/script/collections,/script/helper,"+
			 "/script/lib/backbone,/script/lib/underscore"
  },
  lib:{
    "backbone":'/et_refac/Client/script/lib/backbone.js',
    "mustache":'/et_refac/Client/script/lib/mustache.js',
    "r":'/et_refac/Client/script/lib/r.js',
    "jtemplate":'/et_refac/Client/script/lib/jtemplate.js',
    "underscore":'/et_refac/Client/script/lib/underscore.js',
    "require":'/et_refac/Client/script/lib/require.js',
    "jquery-ui":'/et_refac/Client/script/lib/require.js'
  },
  custum_dir:{
    tpl:{
	  coffeekup:"/tpl/coffeekup",
	  jtemplate:"/tpl/jtemplate",
	  mustache:"/tpl/mustache",
	  underscore:"/tpl/underscore",
	  jade:"/tpl/jade",
	  ejs:"/tpl/ejs"
	},
	css:{
	 less:"/css/less",
	 stylus:"/css/stylus",
	 sass:"/css/sass"
	},
	js:{
	 backbone:"/script/collections,/script/models,/script/views",
	 jquery:"/script/lib/jquery"
	}
  },
  dependency:{
    less:'"less":""',
	stylus:'"stylus":""',
	coffee:'"coffee-script":""',
	sass:'"sass":""',
	coffeekup:'"coffeekup":""'
  },
  template:{
	jadeLayout : [
				 " [                                                                " 
				 ,"	'!!!'                                                            "
				 ," , 'html'                                                         "
				 ," , '  head'                                                       "
				 ," , '    title= title'                                             "
				 ," , '    link(rel=\"stylesheet\", href=\"/stylesheets/style.css\")'"
				 ," , '  body'                                                       "
				 ," , '    block content'                                            "
				 ," ].join(eol);                                                                "
				  ].join(eol),
	jadeIndex : [
				 " ['extends layout'          "
				 ," , ''                       "
				 ," , 'block content'          "
				 ," , '  h1= title'            "
				 ," , '  p Welcome to #{title}'"
				 ," ].join(eol);               "
				].join(eol),
	ejsIndex : [
				 " ['<!DOCTYPE html>'                            						"
				 ," , '<html>'                                                          "
				 ," , '  <head>'                                                        "
				 ," , '    <title><%= title %></title>'                                 "
				 ," , '    <link rel=\'stylesheet\' href=\'/stylesheets/style.css\' />' "
				 ," , '  </head>'                                                       "
				 ," , '  <body>'                                                        "
				 ," , '    <h1><%= title %></h1>'                                       "
				 ," , '    <p>Welcome to <%= title %></p>'                              "
				 ," , '  </body>'                                                       "
				 ," , '</html>'                                                         "
				 ," ].join(eol);                                                        "
				].join(eol),                                                            
	jshtmlLayout : [
					"[	'<!DOCTYPE html>'													"
					,"  , '<html>'                                                          "
					,"  , '  <head>'                                                        "
					,"  , '    <title> @write(title) </title>'                              "
					,"  , '    <link rel=\'stylesheet\' href=\'/stylesheets/style.css\' />' "
					,"  , '  </head>'                                                       "
					,"  , '  <body>'                                                        "
					,"  , '    @write(body)'                                                "
					,"  , '  </body>'                                                       "
					,"  , '</html>'                                                         "
					,"].join(eol),                                                          "
					].join(eol),
	jshtmlIndex : [
					"[	'<h1>@write(title)</h1>'			   "
					," , '<p>Welcome to @write(title)</p>'     "
					," ].join(eol),                            "
					].join(eol),
	less : [
			 " [	'body {'													"
			 ," , '  padding: 50px;'                                            "
			 ," , '  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;' "
			 ," , '}'                                                           "
			 ," , ''                                                            "
			 ," , 'a {'                                                         "
			 ," , '  color: #00B7FF;'                                           "
			 ," , '}'                                                           "
			 ," ].join(eol),                                                    "
	].join(eol) ,
    stylus : [
			  "['body'															 "
			  ,", '  padding: 50px'                                              "
			  ,", '  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif'   "
			  ,", 'a'                                                            "
			  ,", '  color: #00B7FF'                                             "
			  ,"].join(eol),                                                     "
	].join(eol)	
  }
}
