
function genererCode ( depart, dest, n ){
var dep = depart.substr(0,3);
var des= dest.substr(0,3);
n=n+1;
 return (dep+'-'+ des+'-'+n);
}

module.exports = genererCode;