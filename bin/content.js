var eol = 'win32' == require('os').platform() ? '\r\n' : '\n';
module.exports={
  index:[
	"#!/usr/bin/env node																				"
	,"     /**                                                                                          "
	,"     * Module dependencies.                                                                       "
	,"	 */                                                                                             "
	,"	 var pm = require('../lib/{name}')                                                              "
	,"	  , exec = require('child_process').exec                                                        "
	,"	  , program = require('commander')                                                              "
	,"	  , mkdirp = require('mkdirp')                                                                  "
	,"	  , os = require('os')                                                                          "
	,"	  , fs = require('fs')                                                                          "
	,"	  ,util=require('util')                                                                         "
	,"	  ,config=require('./config');                                                                  "
	,"	   //This function is used to output file                                                       "
	,"	function writeFile(w,path,filePath){                                                        "
	,"		  var options = config.http;                                                                "
	,"		  options.path=path;                                                                        "
	,"			g.get(options,function(data){                                                           "
	,"				w(filePath,data);                                                                   "
	,"			});                                                                                     "
	,"	}                                                                                           "
	,"	//please config your application here                                                           "
	,"	program                                                                                         "
	,"	  .version(pm.version)                                                                          "
	,"	  .option('-n, --new', 'ceate new project')                                                     "
	,"	  .parse(process.argv);                                                                         "
	,"	// Application Path                                                                             "
	,"	var path = program.args.shift() || '.';                                                         "
	,"    // end-of-line code                                                                           "
	,"	var eol = 'win32' == os.platform() ? '\\r\\n' : '\\n';                                             "
	,"	/**                                                                                             "
	,"	 * Check if the given directory `path` is empty.                                                "
	,"	 *                                                                                              "
	,"	 * @param {String} path                                                                         "
	,"	 * @param {Function} fn                                                                         "
	,"	 */                                                                                             "
	,"                                                                                                  "
	,"	function emptyDirectory(path, fn) {                                                             "
	,"	  fs.readdir(path, function(err, files){                                                        "
	,"		if (err && 'ENOENT' != err.code) throw err;                                                 "
	,"		fn(!files || !files.length);                                                                "
	,"	  });                                                                                           "
	,"	}                                                                                               "
	,"                                                                                                  "
	,"	/**                                                                                             "
	,"	 * echo str > path.                                                                             "
	,"	 *                                                                                              "
	,"	 * @param {String} path                                                                         "
	,"	 * @param {String} str                                                                          "
	,"	 */                                                                                             "
	,"                                                                                                  "
	,"	function write(path, str) {                                                                     "
	,"	  fs.writeFile(path, str);                                                                      "
	,"	  console.log('   \x1b[36mcreate\x1b[0m : ' + path);                                            "
	,"	}                                                                                               "
	,"                                                                                                  "
	,"	/**                                                                                             "
	,"	 * Mkdir -p.                                                                                    "
	,"	 *                                                                                              "
	,"	 * @param {String} path                                                                         "
	,"	 * @param {Function} fn                                                                         "
	,"	 */                                                                                             "
	,"                                                                                                  "
	,"	function mkdir(path, fn) {                                                                      "
	,"	  mkdirp(path, 0755, function(err){                                                             "
	,"		if (err) throw err;                                                                         "
	,"		console.log('   \033[36mcreate\033[0m : ' + path);                                          "
	,"		fn && fn();                                                                                 "
	,"	  });                                                                                           "
	,"	}                                                                                               "
	,"                                                                                                  "
	,"		/*                                                                                                                                                                     "                                        
	,"	* index.html                                                                                                                                                               "
	,"	*/                                                                                                                                                                         "
	,"	var index_html=[                                                                                                                                                           "
	,"		'																													  '                                                "
	,"		,'<!DOCTYPE HTML>                                                                                                     '                                                "
	,"		,'<html lang=\"en-US\">                                                                                                 '                                                "
	,"		,'<head>                                                                                                              '                                                "
	,"		,'	<meta charset=\"UTF-8\">                                                                                            '                                                "
	,"		,'	<title>ET standard index HTML</title>                                                                             '                                                "
	,"		,'	<link rel=\"stylesheet\" href=\"css/style.css\" type=\"text/css\" media=\"screen\" title=\"no title\" charset=\"utf-8\"/> '                                                    "
	,"		,'</head>                                                                                                             '                                                "
	,"		,'<body>                                                                               '                                                                               "
	,"		,' <div id=\"container\">																				'                                                                  "
	,"		,'        <div id=\"logo\">                                                                           '                                                                  "
	,"		,'            <h1>Package Manager benchmark Store, make it!</h1>   '                                                                                                                "
	,"		,'        </div>                                                                                    '                                                                  "
	,"		,'        <div id=\"menu\">                                                                           '                                                                  "
	,"		,'            <ul>                                                                                  '                                                                  "
	,"		,'                <li>                                                                              '                                                                  "
	,"		,'                    <a href=\"#/main\">Home</a>                                                          '                                                             "
	,"		,'                </li>                                                                             '                                                                  "
	,"		,'                <li>                                                                              '                                                                  "
	,"		,'                    <a href=\"#/projects\">Project List</a>                                         '                                                                  "
	,"		,'                </li>                                                                             '                                                                  "
	,"		,'                <li>                                                                              '                                                                  "
	,"		,'                    <a href=\"#/users\">User List</a>                                               '                                                                  "
	,"		,'                </li>                                                                             '                                                                  "
	,"		,'            </ul>                                                                                 '                                                                  "
	,"		,'        </div>                                                                                    '                                                                  "
	,"		,'        <div id=\"page\">                                                                           '                                                                  "
	,"		,'           <p>Welcome to Package Demo Page!<br/>Please click <a href=\"https://github.com/zjhiphop/pminpm\">home page</a> to see detail!</p>   '           "
	,"		,'           <br/><br/>'                                                                                                                                               "
	,"		,'           Build your dream,Come on!</p> '                                                                                                                           "
	,"		,'        </div>                                                                                    '                                                                  "
	,"		,'        <div id=\"footer\">                                                                         '                                                                  "
	,"		,'           If u have any problem,please contact <a href=\"mailto:zjhiphop@gmail.com\">Jade.Z</a>                                                          '            "
	,"		,'        </div>                                                                                    '                                                                  "
	,"		,'    </div>                                                                                        '                                                                  "
	,"		,'</body>                                                                                                             '                                                "
	,"		,'</html>                                                                                                             '                                                "
	,"		,''                                                                                                                                                                    "
	,"	].join(eol);     "
	,"  var css=['#container {										'		"
	,"		,'  width: 960px;                                   '         "
	,"		,'  margin: auto;                                   '         "
	,"		,'  min-height: 500px;                              '         "
	,"		,'  background: #fff;                               '         "
	,"		,'}                                                 '         "
	,"		,'#menu {                                           '         "
	,"		,'  background: #444;                               '         "
	,"		,'  height: 30px; color: #fff; text-align: right;   '         "
	,"		,'}                                                 '         "
	,"		,'#menu ul {                                        '         "
	,"		,'  list-style: none;                               '         "
	,"		,'  margin: 0; padding: 0;                          '         "
	,"		,'}                                                 '         "
	,"		,'#menu ul li {                                     '         "
	,"		,'  float: left;                                    '         "
	,"		,'  margin-left: 10px;                              '         "
	,"		,'}                                                 '         "
	,"		,'#menu ul li a {                                   '         "
	,"		,'  color: #fff;                                    '         "
	,"		,'  line-height: 30px;                              '         "
	,"		,'  text-decoration: none;                          '         "
	,"		,'}                                                 '         "
	,"		,'#menu ul li a:hover {                             '         "
	,"		,'  color: #ccc;                                    '         "
	,"		,'}                                                 '         "
	,"		,'#container {                                      '         "
	,"		,'                                                  '         "
	,"		,'}                                                 '         "
	,"		,'#logo {                                           '         "
	,"		,'   padding: 20px;                                 '         "
	,"		,'}                                                 '         "
	,"		,'h1{                                               '         "
	,"		,'  padding: 0;                                     '         "
	,"		,'  margin: 0;                                      '         "
	,"		,'}                                                 '         "
	,"		,'#page {                                           '         "
	,"		,'  border-top: 1px solid #ebebeb;                  '         "
	,"		,'  border-bottom: 1px solid #ebebeb;               '         "
	,"		,'  min-height: 400px;                              '         "
	,"		,'  padding: 20px;                                  '         "
	,"		,'}                                                 '         "
	,"		,'                                                  '         "
	,"		,'#footer {                                         '         "
	,"		,'  text-align: center;                             '         "
	,"		,'}                                                 '         "
	,"	].join(eol);                                                      "
	,"	/**                                                                                             "
	,"	 * Exit with the given `str`.                                                                   "
	,"	 *                                                                                              "
	,"	 * @param {String} str                                                                          "
	,"	 */                                                                                             "
	,"                                                                                                  "
	,"	function abort(str) {                                                                           "
	,"	  console.error(str);                                                                           "
	,"	  process.exit(1);                                                                              "
	,"	}	                                                                                            "
	,"    // Generate application                                                                       "
	,"	if(program['new']){                                                                             "
	,"	  (function createApplication(path) {                                                           "
	,"		emptyDirectory(path, function(empty){                                                       "
	,"		  if (empty) {                                                                              "
	,"			createApplicationAt(path);                                                              "
	,"		  } else {                                                                                  "
	,"			program.confirm('destination is not empty, continue? ', function(ok){                   "
	,"			  if (ok) {                                                                             "
	,"				process.stdin.destroy();                                                            "
	,"				createApplicationAt(path);                                                          "
	,"			  } else {                                                                              "
	,"				abort('aborting');                                                                  "
	,"			  }                                                                                     "
	,"			});                                                                                     "
	,"		  }                                                                                         "
	,"		});                                                                                         "
	,"	  })(path);                                                                                     "
	,"	}else{                                                                                          "
	,"	  console.log(\"You did nothing!\\r\\nuse 'etpm -h' to get help!\");                              "
	,"	}                                                                                               "
	,"   {css_template}                                                                                               "
	,"	function createApplicationAt(path) {                                                            "
	,"	  console.log();                                                                                "
	,"	  process.on('exit', function(){                                                                "
	,"		console.log();                                                                              "
	,"		console.log('   dont forget to install dependencies:');                                     "
	,"		console.log('   $ cd %s && npm install', path);                                             "
	,"		console.log();                                                                              "
	,"	  });                                                                                           "
	,"	  var dir_arr={dir}, json='{json}';                                                                            "
	,"	  mkdir(path, function(){                                                                       "
	,"		//create application dir                                                                    "
	,"		var len=dir_arr.length;                                                                     "
	,"		for(var i=0;i<len-1;i++){                                                                   "
	,"		   mkdir(dir_arr[i]);                                                                       "
	,"		}                                                                                           "
	,"      mkdir(dir_arr[len-1],function(){ "
	,"      write(path +\"\/css\/style.css\",css);  "
	,"      {create_template}                                                                        "
	,"      {create_js} 		                                                                        "
	,"      {create_html}  "
	,"      {create_css}                                                                                "
	,"      });  "
	,"		write(path + '/package.json', json);                                                      "
	,"	  });                                                                                             "
	,"	}                                                                                               "
	,""
  ].join(eol),
  pkg_json:[
     ' {																		'
     ,'     "name"          : "{name}",                                         '
     ,'     "version"       : "0.1.0-alpha",                                    '
     ,'     "description"   : "A Package Manager to build {type} application",  '
     ,'     "homepage"      : "https://www.example.com",                        '
     ,'     "keywords"      : ["module", "package", "optimization", "tool"],    '
     ,'     "author"        : "Your Name <Your Email>",                         '
     ,'     "contributors"  : ["Your Name <Your Email>"],              '
     ,'     "engines"       : {"node":">= 0.5.0 < 0.7.0"},                      '
     ,'     "dependencies"  : {                                                 '
     ,'                         "mkdirp": ">=0.0.7" ,                           '
     ,'                         "commander": "0.3.2"                            '
     ,'                       },                                                '
     ,'     "repository"    : {                                                 '
     ,'                         "type": "git",                                  '
     ,'                         "url": "Your git project address"               '
     ,'                       },                                                '
     ,'     "main"          : "index",                                          '
     ,'     "bin"           : {                                                 '
     ,'                         "{name}": "./bin/{name}"                        '
     ,'                       },                                                '
     ,'     "preferGlobal"  : true                                              '
     ,' }                                                                       '
  ].join(eol)
}
