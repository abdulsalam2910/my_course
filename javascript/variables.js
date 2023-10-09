// when we redeclare variable it runs in var.
// var x=5
// console.log("before",x)
// var x=6
// console.log("after",x)

// when we reassign in var it also runs.
// var x=5
// console.log("before",x)
//  x=6
// console.log("after",x)

// when redeclare in let and run it shows error
// let x=5
// console.log("before",x)
// let x=6
// console.log("after",x)

// when we reassign variable in let it runs
// let x=5
// console.log("before",x)
//  x=6
// console.log("after",x)

// in const we connot redeclare and reassign.
// const x=5
// console.log("before",x)
// const x=6
// console.log("after",x)

// const x=5
// console.log("before",x)
//  x=6
// console.log("after",x)

// <<< key word          redeclare          reassign

        //  var                yes                yes
        //  let                 no                yes
        //  const               no                 no


var x = "krishna"
console.log("before",x)

var x = "abdul"
console.log("after",x)