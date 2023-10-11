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


// let time = 5

// if (time < 10){
//     console.log("good morning")
// }else if (time<20) {
//     console.log("good day")
// }else{
//     console.log("good evening")

// } 


// <<<<key words       redeclare            reassign           scope
        //  var             yes                  yes              no
        //  let             no                   yes              yes
        //  const           no                   no               yes


// var x = "ramakrishna"
// console.log("before",x)

// var x = "abdul"
// console.log("afer",x)

// var x = "ramakrishna"
// console.log("before",x)

// var x = 100
// console.log("after",x)

// <<<the or contant present in between the curly brackets is called scope



// <<<<<<<<in true condition
// let x = "abdul"

// if(true){
//     console.log("block",x)
// }
// console.log("globle",x)


// var x = "abdul"

// if(true){
//    var x = "ramakrishna"
//    console.log("block",x)
// }
// console.log("globle",x)



// let x = "abdul"

// if(true){
//    let x = "ramakrishna"
//    console.log("block",x)
// }
// console.log("globle",x)




// var y = "abdul"

// if(true){
//    var y  = "ramakrishna"
//    console.log("var-block",y)
// }
// console.log("var-globle",y)




// let x = "abdul"

// if(true){
//    let x = "ramakrishna"
//    console.log("let-block",x)
// }
// console.log("let-globle",x)



// let x = "abdul"

// if(true){
//    let x = "ramakrishna"
//    let y = "salam"
//    console.log("let-block",x)
//    console.log("let-block",y)
// }
// console.log("let-globle",x)


// let x = "navya deepa"

// if(true){
//     x = "ramakrishna"
//     console.log("block",x)
// }
// console.log("globle",x)



// <<<< if there is no variable in 'block'
// we can access the 'globle' variable in block too

// let x = "navya deepa"

// if(true){

//     console.log("block",x)
// }
// console.log("globle",x)

// unless we don't assign a value in "block" it does't the difference block and globle
// untill the block value is not given we can assign globle value any where.



// <<<<redeclare
// let x = "navya deepa"

// if(true){
// let x = "ramakrishna"
//     console.log("block",x)
// }
// console.log("globle",x)



// <<<<reassign
// let y = "navya deepa1"

// if(true){
//     y = "ramakrishna1"
//     console.log("block",y)
// }
// console.log("globle",y)


// const p = "navya deepa1"

// if(true){
//        const p = "ramakrishna1"
//       console.log("block",p)
// }
// console.log("globle",p)
// in scope we can redeclare with const but cannot reassign


// scope consept in var no
// var name = "navya deepa"

// if(true){
//        var name = "ramakrishna"
//       console.log("var-1",name)
// }
// console.log("var-2",name)



// // scope consept in let yes
// let name1 = "navya deepa1"

// if(true){
//        let name1 = "ramakrishna1"
//       console.log("1-let",name1)
// }
// console.log("2-let",name1)



// // scope consept in const yes
// const name2 = "navya deepa1"

// if(true){
//        var name = "ramakrishna1"
//       console.log("1-const",name2)
// }
// console.log("2-const",name2)