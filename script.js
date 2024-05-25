function byteSize(str) {
    return new Blob([str]).size;
}

// Example usage:
console.log(byteSize("Hello")); // Output: 5 (ASCII characters)
console.log(byteSize("你好"));   // Output: 6 (Non-ASCII characters, 3 bytes each in UTF-8)


// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
