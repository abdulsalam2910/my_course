
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length)

// let name = "abdul salam"
// console.log(name)

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length)


// slice string method

// let text = "shaik_abdul_salam"
// let part = text.slice(5,12)
// console.log(part)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part)

// let text = "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
// let part = text.slice(15)
// console.log(part)

// let text = "corona is deadly virus on earth";
// let part = text.slice(9);
// console.log(part)

// let text = "corona is deadly virus on earth";
// let part = text.slice(-5)
// console.log(part)

// let text = "corona is deadly virus on earth";
// let part = text.slice(-14,-9)
// console.log(part)

// let str = "chicken,mutton,fish";
// let part = str.substr(8,6);
// console.log(part)

// let str = "chicken,mutton,fish";
// const part = str.substr(15,4)
// console.log(part)

// let str = "chicken,mutton,fish";
// const part1 = str.substr(8,6);
// const part2 =str.slice(15,19)
// console.log(part1,part2)

// let text = "please visit fb"
// console.log("before",text)
// const newstring = text.replace("fb","instagram")
// console.log("after",newstring)


// it doesn't replace in this case

// let text = "please visit facebook"
// console.log("before",text)
// const newstring = text.replace("Facebook","instagram")
// console.log("after",newstring)

// with i/ flag in this case it does (case in sesitive)

// let text = "please visit facebook"
// console.log("before",text)
// const newstring = text.replace(/Facebook/i,"instagram")
// console.log("after",newstring)


// let text = "please visit facebook Facebook"
// console.log("before",text)
// const newstring = text.replace(/Facebook/ig,"instagram")
// console.log("after",newstring)


// (globle match with g/ flag)

// let text = "please visit facebook Facebook facebook Facebook"
// console.log("before",text)
// const newstring = text.replace(/Facebook/g,"instagram")
// console.log("after",newstring)

// let text = "please visit facebook Facebook facebook Facebook"
// console.log("before",text)
// const newstring = text.replace(/Facebook/ig,"instagram")
// console.log("after",newstring)


// for upper case

// let text = "please visit facebook Facebook facebook Facebook"
// console.log("before",text.toUpperCase())

// for lower case

// const text ="MY TEACHER'S NAME IS LALITHA"
// console.log("before",text.toLowerCase())

// concat string method

// let text1 = "ramesh"
// let text2 = "suresh"
// let text3 = text1.concat(" ", text2)
// console.log(text3)

// let text1 = "ramesh"
// let text2 = "suresh"
// let text3 = text1.concat(" ","ramakrishna"," ", text2)
// console.log(text3)


// let text1 = "salam"
// let text2 = "abdul"
// let text3 = text1.concat(" ", text2)
// console.log(text3)

// const text1 = "salam"
// const text2 = "abdul"
// const text3 = text2.concat(" ",text1)
// console.log(text3)

// const text4 = text2+"  "+text1
// console.log(text4)

// trim string for removing space

// let email = "        abdul.sk2910@gmail.com           "
// newemail = email.trim()
// console.log(email)
// console.log(newemail)

// let email = "        abdul.sk2910@gmail.com           "
// newemail = email.trim()
// console.log(newemail)



// let email = "        abdul.sk2910@gmail.com           "
// newemail = email.trim()
// console.log(email.length)
// console.log(newemail.length)


// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2)


// const text1 = "     Hello World!     ";
// const text2 = text1.trimEnd();
// console.log(text2)


// padstart string

// let text = "2910";
// let padded = text.padStart(14,"0");
// console.log(padded)

// const text = "2910"
// const padded = text.padStart(14,"*")
// console.log(padded)

// let text = "1234567891234567"
// let last4digits = text.slice(-4)

// console.log(last4digits)

// let finaloutput = last4digits.padStart(16,"*")
// console.log(finaloutput)


               //or

// let text = "123456789123456789"
// let last4digits = text.slice(-4).padStart(16,"*")
// console.log(last4digits)

// let last4digits = text.slice(-4).padStart(text.length,"-")
// console.log(last4digits)






// let fname = "abdul"
// let lname = "salam"
// let newname = fname.concat(lname)
// let uperName = newname.toUpperCase()
// console.log(uperName)


// let fname1 = "abdul"
// let lname2= "salam"
// let newname3= fname1.concat(lname2).toUpperCase().length

// console.log(newname3)
