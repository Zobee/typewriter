const sentence = "hello there from lighthouse labs";

let timeout = 500;
for(let i = 0; i < sentence.length; i++){
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if(i === sentence.length - 1){
      process.stdout.write('\n')
    }
  }, timeout)
  timeout += 50
}