var a={isColor:a=>/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(a),defined:a=>null!=a,defaultValue:(a,e)=>null!=a?a:e,validateEmail:a=>/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a),arrayUnique:a=>{let e=[];for(let l=0;l<a.length;l++)-1===e.indexOf(a[l])&&e.push(a[l]);return e}};export{a as default};