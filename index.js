
// Refferntial:function,array
//function
//syntax:
//function functionName() {return}

function print() {
    console.log('hey');
}
print()

function sub(c,d) {
    var sub=c-d;
    console.log(sub);
}

sub(1,4);
sub(5,7);

function add(c,d){
    var add=c-d;
    return;
}
console.log(add(1,4))

var res=sub(1,2);
// Function expression
var sub1=function(c,d){
    var sub1=function(c,d){
        var sub=c-d;
        return sub;
    }
    var res=sub(1,2);
    console.log(res )

}


