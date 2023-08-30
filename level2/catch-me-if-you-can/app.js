function sum(x, y){
    //check data types first and throw error
    try{
  if( x !== Number(x) || y !== Number(y)){
    throw 'either X & or Y isnt a number'
    }else{
    console.log('did I console log')
    }
  return x + y;
    }
    catch(err){
    console.log(err)
    }
}

console.log(sum(3, "t"))




var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
    if ( username !== 'sam' && password !=="123abc"){
        throw 'Try hacking another accout'
    }else if( username !== 'sam'){
        throw "invalade user name"
    }else if(password !=="123abc"){
        throw 'invalade password'
    }else{
        console.log(`welcome ${username}`)
    } 
    }
    catch(err){
        console.log(err)
    }
}
console.log(login("sam", "123abc"))