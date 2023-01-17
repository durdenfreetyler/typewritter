const sentence = "hello there from lighthouse labs";
delay = 250
for (const char of sentence) {

setTimeout(() => {
  
  process.stdout.write(char);


},(delay += 100))
console.log("\n")
  
}



// sentence.forEach(char => {

//   console.log(char)

// })
