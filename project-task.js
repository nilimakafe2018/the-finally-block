/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples

Answer: i learned to use JavaScript's standars exceptions to handle errors, like reference erroe
for missing values, type errors for wrong typing and error fro custom chacks like empty file data.
By using clear exception helps users and developers know ehat went wrong.


- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  // Simulate the opening a file or resource
  let fileHandle = null;


  try {
    // 1 TODO: Add input validation and standard exception
    if (!fileName){
      throw new ReferenceError("File nane not found.");
    }
    if (typeof fileData !== "string"){
      throw new TypeError("File data needs to be a string type.");
    }
    if (fileData === ""){
      throw new TypeError("File daya should not be empty.");
    }

    // TODO: Implement simulated file processing here
    fileHandle = {name: fileName};
    console.log(`Processing file: ${fileHandle.name}`);
    console.log(`File content: ${fileData}`);

    // TODO: Add simulated file operations (reading/writing)
    console.log("Simulated file operations reading/writing has been completed.");
 
  }

  catch (err){
    // Implement error handling
    console.error("Error:", err.message);
  }

  // Implement a finally block to close resources

  finally{
    if (fileHandle){
      console.log(`Closing file: ${fileHandle.name}`);
      fileHandle = null;
    }
    else {
      console.log("There is no file to close")
    }
    console.log("Finally blobk has been execute.");
  }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
