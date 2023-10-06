import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
})
export class Assignment1Component {
  assignment = [
    {
      question: '1. What is rest API?',
      buttonname: 'Show Answer',
      answer:
        'Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage. It’s used to fetch or give some information from a web service. All communication done via REST API uses only HTTP request. ',
      show: false,
    },
    {
      question: `2. What are http and https protocols? Explain in detail the following http methods.
      
      a.GET
      
      b.POST
      
      c.PUT
      
      d.DELETE
      `,
      buttonname: 'Show Answer',
      answer:
        `
        HTTP and HTTPS Protocols HTTP (Hypertext Transfer Protocol) HTTP is the foundation of data communication on the World Wide Web. It is an application layer protocol that
         allows for the transfer of data between a client (usually a web browser) and a server. HTTP is a text-based protocol, which means that the messages exchanged between
          the client and server are human-readable.Key features of HTTP.<br>
          <strong>1) Stateless</strong>: Each HTTP request from a client to a server is independent and does not retain any previous
           state information.
           <br>
           <strong>2) Connectionless</strong>: HTTP does not maintain a persistent connection between the client and server. After each request/response cycle, the connection
            is closed.
            <br>
            <strong>3) Simple</strong>: HTTP messages consist of a request line (in the case of the client) or a status line (in the case of the server), headers, and an optional body.
            HTTPS (Hypertext Transfer Protocol Secure)
            <br>
            HTTPS is a secure version of HTTP. It adds a layer of security by encrypting the data transmitted between the client and server, 
            making it difficult for third parties to intercept and read the data. HTTPS uses SSL/TLS (Secure Sockets Layer/Transport Layer Security) to establish a secure encrypted
             connection.HTTPS is a secure version of HTTP.<br>
             <strong>1) Encryption:</strong> HTTPS uses cryptographic protocols to encrypt the data, ensuring confidentiality.<br>
             <strong>2) Data Integrity: </strong>It also ensures that the data has not been tampered with during transmission.<br>
             <strong>3) Authentication:</strong> HTTPS provides authentication, confirming that the server the client is connecting to is indeed the server it claims to be.<br>
             <strong>4) Trust: </strong>HTTPS relies on digital certificates issued by trusted Certificate Authorities (CAs) to establish trust in the identity of the server.<br>
                  Common HTTP Methods<br>
                  <strong>GET </strong>Purpose: Used to retrieve data from a specified resource. Characteristics Idempotent: Repeated GET requests to 
                      the same resource will not have any side effects. They only retrieve data. Safe: GET requests should not modify the server's state. <br>
                      Example: Fetching a web page, an image, or data from an API by including parameters in the URL.<br>
                      
                      <strong>POST </strong>Purpose: Used to send data to the server to create a new resource or perform some operation that may change the server's state.<br>
                      Characteristics Non-idempotent: Repeated POST requests to the same resource can have different effects. Not necessarily safe: POST requests
                        can result in server-side changes.<br>
                         Example: Submitting a form, uploading a file, or sending data to create a new user account.<br>
                        
                         <strong>PUT </strong>- Purpose: Used to update or replace an existing resource or create a new resource if it doesn't exist. <br>
                        Characteristics - Idempotent: Repeated PUT requests to the same resource with the same data should have the same result. 
                        Typically used to update an entire resource, so it may require sending all data for the resource.<br>
                        Example: Updating a user's profile information with a complete set of data.<br>
                        
                        <strong>DELETE </strong>- Purpose: Used to request the removal of a resource from the server. <br>
                        Characteristics - Idempotent: Repeated DELETE requests to the same resource will not have any side effects. 
                        Typically removes the specified resource from the server. <br>
                        Example: Deleting a user account or removing a file from a server.<br>
                        These HTTP methods are essential for client-server communication in web applications and are used to perform various operations such as retrieving data, 
                        creating, updating, and deleting resources on the server. Understanding their characteristics is crucial for designing and implementing web services and APIs effectively.
        `,
      show: false,
    },
    {
      question: `3. Explain the following with a component diagram (png image) :
      3-tier architecture`,
      buttonname: 'Show Answer',
      answer:
        `<img src='https://www.collidu.com/media/catalog/product/img/d/3/d374473e2c180b946d079add83932876b0b43ede1863195ff97d5a8e95e56cab/3-tier-architecture-slide2.png' alt='image' position='relative' padding='15px auto' margin='auto' width='50%' height='auto' /><br>A 3-tier architecture is a software architecture pattern that divides an application into three separate logical layers, each with its own specific responsibilities. These layers are typically referred to as the presentation layer, the business logic layer, and the data storage layer.<br>

        Here's a brief overview of each tier:
        <br>
        <br>
        <strong>Presentation Layer: </strong>This is the topmost layer and is responsible for handling user interface-related tasks. It includes components like web pages, user interfaces, and client-side code. The primary role of the presentation layer is to interact with users and gather input, as well as to display data and results from the lower layers.
        <br><br><strong>Business Logic Layer:</strong> Also known as the application layer, this tier contains the core business logic of the application. It handles tasks such as data validation, processing, and business rules implementation. It acts as an intermediary between the presentation layer and the data storage layer, ensuring that data is processed correctly and securely.
        <br><br><strong>Data Storage Layer:</strong> This layer is responsible for managing data storage, retrieval, and persistence. It typically includes databases and storage systems where application data is stored. The data storage layer ensures data integrity and provides a structured way to store and retrieve information.
        <br><br>In a 3-tier architecture, these layers are loosely coupled, meaning that they can be developed and maintained independently. This separation of concerns allows for easier scalability, maintenance, and modification of the application as each layer can be modified or replaced without affecting the others.`,
      show: false,
    },
    {
      question: '4. What are different array methods in javascript? Explain with examples',
      buttonname: 'Show Answer',
      answer:
      
        `<div style="font-family:Arial, Helvetica, sans-serif;">
        <pre>
        1)<strong>push()</strong> - Adds one or more elements to the end of an array. Modifies the original array and returns its new length.
         Example: const fruits = ['apple', 'banana'];
          fruits.push('orange', 'grape'); // ['apple', 'banana', 'orange', 'grape'] 

        2)<strong>pop()</strong> - Removes the last element from an array. Modifies the original array and returns the removed element.
          Example: const fruits = ['apple', 'banana', 'orange'];
          const removedFruit = fruits.pop(); // 'orange' 

        3)<strong>unshift()</strong> - Adds one or more elements to the beginning of an array. Modifies the original array and returns its new length.
          Example: const fruits = ['banana', 'orange'];
          fruits.unshift('apple', 'grape'); // ['apple', 'grape', 'banana', 'orange'] 

        4)<strong>shift()</strong> - Removes the first element from an array. Modifies the original array and returns the removed element.
          Example: const fruits = ['apple', 'banana', 'orange'];
          const removedFruit = fruits.shift(); // 'apple'

        5)<strong>concat()</strong> - Combines two or more arrays and returns a new array.
          Example: const fruits1 = ['apple', 'banana']; 
          const fruits2 = ['orange', 'grape'];
          const combinedFruits = fruits1.concat(fruits2); // ['apple', 'banana', 'orange', 'grape'] 

        6)<strong>splice()</strong> - Adds or removes elements from an array at a specified index. Modifies the original array and returns an array of removed elements.
          Example: const fruits = ['apple', 'banana', 'orange'];
          const removed = fruits.splice(1, 1, 'grape', 'kiwi'); // ['banana']

        7)<strong>slice()</strong> - Returns a shallow copy of a portion of an array into a new array.
          Example: const numbers = [1, 2, 3, 4, 5]; 
          const slicedNumbers = numbers.slice(1, 4); // [2, 3, 4] 

        8)<strong>forEach()</strong> - Calls a function once for each element in an array.
          Example: const numbers = [1, 2, 3];
          numbers.forEach((number) => console.log(number)); // 1, 2, 3 

        9)<strong>map()</strong> - Creates a new array by applying a function to each element in an existing array.
          Example: const numbers = [1, 2, 3];
          const doubled = numbers.map((number) => number * 2); // [2, 4, 6] 

        10)<strong>filter()</strong> - Creates a new array with all elements that pass a test specified by a function.
          Example: const numbers = [1, 2, 3, 4, 5]; 
          const evens = numbers.filter((number) => number % 2 === 0); // [2, 4]
        </pre>
        </div>`,
      show: false,
    },
    {
      question: '5. What is difference between let, and const in javascript?',
      buttonname: 'Show Answer',
      answer:
        `
        In JavaScript, let, var, and const are used to declare variables, but they have some key differences in terms of scope, hoisting, and mutability:<br><br>
        
        <strong>1) var:</strong> Variables declared with var are function-scoped or globally scoped, but not block-scoped. They are hoisted, which means they are moved to the top of their containing function 
        or global scope during compilation. var variables can be re-declared within the same scope, and they can also be updated. They are not affected by block boundaries
         (e.g., if statements or loops).
         
         <br><br><strong>2) let: </strong>Variables declared with let are block-scoped, which means their scope is limited to the block (e.g., if statement or loop)
          in which they are defined. They are also hoisted, but unlike var, they are not initialized until the line of code where they are declared is executed. let variables
           can be updated within their scope, but they cannot be re-declared in the same scope.
           
           <br><br><strong>3) const: </strong>Variables declared with const are block-scoped, just like let. However,
            const variables cannot be reassigned after they are initially assigned a value. They are also hoisted but, like let, they are not initialized until the line of code 
            where they are declared is executed.In general, it's recommended to use const by default for variables that don't need to be reassigned, as it helps prevent
             unintentional variable mutation. Use let for variables that need to be reassigned, and minimize the use of var because of its behavior related to hoisting and lack
              of block scope, which can lead to unexpected results and bugs in larger codebases.
        `,
      show: false,
    },
    {
      question: '6. What is AJAX? Explain with examples.',
      buttonname: 'Show Answer',
      answer:
        `
        AJAX, which stands for Asynchronous JavaScript and XML, is a set of web development techniques and technologies used to create interactive and dynamic web applications.
         AJAX allows web pages to send and receive data from a server asynchronously without needing to reload the entire page. This enables smoother and more responsive user 
         experiences by updating specific parts of a webpage without the need for full page refreshes.
         <br>
        Here's an explanation of how AJAX works with examples:
        <br>
        Basic AJAX Request:<br><br>
        <strong>
        &nbsp;&nbsp;// Create an XMLHttpRequest object<br>
          var xhr = new XMLHttpRequest();<br>
          <br>
          &nbsp;&nbsp;// Configure the request (GET request to a server endpoint)<br>
          xhr.open("GET", "https://api.example.com/data", true);<br>
          <br>
          &nbsp;&nbsp;// Define a callback function to handle the response<br>
          xhr.onreadystatechange = function () {<br>
            if (xhr.readyState === 4 && xhr.status === 200) {<br>
              // Process the server response here<br>
              var data = JSON.parse(xhr.responseText);<br>
              console.log(data);<br>
              &nbsp;  }<br>
          };<br>
          <br>
          // Send the request<br>
          xhr.send();</strong>
          <br><br>
          In this example, an XMLHttpRequest is used to send a GET request to a server endpoint. When the server responds with data (in this case, assumed to be JSON), 
          the callback function is triggered to handle the response.
          <br><br>

Fetch API (Modern AJAX):
<br><br>
<strong>&nbsp;// Using the Fetch API for AJAX<br>
fetch("https://api.example.com/data")<br>
&nbsp;.then(function (response) {<br>
  &nbsp; return response.json();<br>
  })<br>
  .then(function (data) {<br>
    &nbsp; console.log(data);<br>
  })<br>
  .catch(function (error) {<br>
    &nbsp;  console.error("Error:", error);<br>
  });</strong>
  <br><br>
The Fetch API is a modern alternative to XMLHttpRequest and provides a more user-friendly way to make AJAX requests. It uses Promises for handling asynchronous operations,
 making the code cleaner and easier to read.<br>

 <strong>Updating Web Page Content:</strong>
<br>
AJAX is often used to update specific parts of a web page without reloading the entire page. For example, you could use AJAX to load new comments on a blog post without
 refreshing the entire page.<br><br>

 <strong>Autocomplete Search:</strong>
<br>
AJAX can be used to implement real-time autocomplete suggestions in search fields. As users type in a search query, AJAX requests can be made to a server to fetch matching
 results and display them in a dropdown, providing a smooth search experience.<br><br>

 <strong>Infinite Scrolling:</strong><br>
AJAX is commonly used for implementing infinite scrolling on web pages. As the user scrolls down a page, new content is fetched from the server and appended to the existing
 content, allowing users to continue scrolling without navigating to a new page.<br><br>

In summary, AJAX is a crucial technology in modern web development that enables web applications to communicate with servers asynchronously, providing a more dynamic and
 responsive user experience. It's often used for fetching data, updating content, and enhancing user interactions on websites.
          `,
      show: false,
    },
    {
      question: '7. What is single page application?',
      buttonname: 'Show Answer',
      answer:
        `
        A <strong>Single Page Application (SPA)</strong> is a type of web application or website that interacts with the user by dynamically rewriting the current web page, rather than
         loading entire new pages from the server. In other words, SPAs load a single HTML page and then dynamically update the content as the user interacts with the
          application, typically without requiring full page reloads. This approach provides a smoother and more responsive user experience.
          <br><br>
        Key characteristics of SPAs include:<br>
        
        <strong>Dynamic Content Loading: </strong>In SPAs, content is loaded and updated dynamically as needed, often through asynchronous requests to a server using technologies like
         AJAX or the Fetch API. This means that only the necessary data is fetched and rendered, reducing the need for full page reloads.
         <br>
         <strong>Client-Side Routing:</strong> SPAs often implement client-side routing, where the URL structure is managed on the client side rather than being handled by the server.
         This allows for navigation within the application without requesting new pages from the server.
         <br>
         <strong>Rich User Interactions: </strong>SPAs can provide a highly interactive and seamless user experience, with features like real-time updates, animations, and smooth
         transitions between different views or components.
         <br>
         <strong>Improved Performance: </strong>Since SPAs load resources and content incrementally, they can feel faster and more responsive compared to traditional multi-page
         applications, especially for actions that don't require a full page reload.
         <br>
         <strong>Separation of Concerns: </strong>SPAs typically follow a more structured and modular approach to development, often separating the front-end code into components 
        or modules that can be reused across the application.
        <br>
        <strong>API-Driven: </strong>Many SPAs rely on APIs (Application Programming Interfaces) to fetch and send data to the server, allowing for a clear separation between
         the front-end and back-end development. This makes it possible to have multiple client applications (e.g., web, mobile) interact with the same backend.
         <br>
         <strong>Initial Load:</strong> When a user first visits a SPA, the initial HTML, CSS, and JavaScript code are loaded. Subsequent interactions and data fetching are
         done without reloading the entire page.
         <br><br>
        Common JavaScript frameworks and libraries used to build SPAs include React, Angular, and Vue.js. These frameworks provide tools and components that
         simplify the development of SPAs, making it easier to manage the application's state, handle routing, and create interactive user interfaces.
         <br><br>
        Overall, SPAs have become increasingly popular because they offer a more fluid and engaging user experience, which is particularly valuable for
         web applications where user interactions and real-time updates are essential. However, they also come with challenges, such as search engine 
         optimization (SEO) considerations and initial load performance, which need to be addressed when developing SPAs.
         `,
      show: false,
    },
    {
      question: '8. What is a component in Angular?',
      buttonname: 'Show Answer',
      answer:
        `
        In Angular, a component is a fundamental building block for building web applications. It is a self-contained, reusable piece of user interface
         that encapsulates a specific part of the application's functionality and UI. Components in Angular are responsible for rendering a portion of 
         the user interface and handling the logic related to that portion.
         <br>

        Here are the key characteristics and aspects of Angular components:
        <br><br>
        
        <strong>Reusability:</strong> Components are designed to be reusable. You can create a component once and use it in multiple places throughout your application.
        <br>
        <strong>Encapsulation:</strong> Components encapsulate their behavior and structure, meaning that they manage their own state and functionality independently of
         other components. This helps in maintaining a clear separation of concerns.
         <br>
         <strong>Templates:</strong> Each Angular component has an associated template that defines the HTML structure and layout for that component. The template can 
        include placeholders and bindings to display data and interact with the component's logic.
        <br>
        <strong>Logic:</strong> Components contain the logic and behavior specific to their functionality. This logic is typically written in TypeScript, which is a
         superset of JavaScript.
         <br>
         <strong>Input and Output Properties:</strong> Components can have input properties that allow data to be passed into them from parent components, and output
         properties that emit events to notify parent components of changes or actions within the child component.
         <br>
         <strong>Lifecycle Hooks:</strong> Angular provides a set of lifecycle hooks that allow you to execute code at specific points in a component's lifecycle.
         Common lifecycle hooks include ngOnInit, ngOnChanges, ngOnDestroy, and more.
         <br>
         <strong>Dependency Injection:</strong> Components can make use of Angular's dependency injection system to obtain services, which are used to share data and
         functionality across components.
         <br>
         <strong>Metadata:</strong> Components are decorated with metadata using decorators such as @Component. This metadata provides information about the component,
         including its selector, template, styles, and more.
         `,
      show: false,
    },
    {
      question: `9. Explain with syntax the following directives:
      a. ngFor
      b. nglf`,
      buttonname: 'Show Answer',
      answer:
        `
        

a. ngFor Directive:
<br><br>
Purpose: The ngFor directive is used for iterating over a collection (such as an array or list) in Angular templates and generating HTML elements
 for each item in the collection.
 <br><br>
Syntax:<br>
<strong>&lt;ul&gt;<br>
&nbsp;&lt;li&gt; *ngFor="let item of items">{{ item }}&lt;/li&gt;<br>
  &lt;/ul&gt;</strong><br><br>
In this example, *ngFor is used to iterate over the items array, and for each item in the array, an <li> element is generated with the content of the item.<br><br>
b. ngIf Directive:<br><br>

Purpose: The ngIf directive is used for conditionally rendering elements in Angular templates. It displays or hides an element based on the
 truthiness or falsiness of an expression.<br><br>
Syntax:<br>
<strong>&lt;div *ngIf="condition"&gt;This content is displayed when condition is true.&lt;/div&gt;<br>
&lt;div *ngIf="!condition"&gt;This content is displayed when condition is false.&lt;/div&gt;</strong><br><br>
In this example, *ngIf is used to conditionally display or hide the <div> elements based on the value of the condition expression.<br>
 If condition is true, the first <div> will be displayed; otherwise, the second <div> will be displayed.
        
        `,
      show: false,
    }
  ];

  toggleDisplay(item: any) {
    item.show = !item.show;
    if (item.buttonname == 'Show Answer') {
      item.buttonname = 'Hide Answer';
    } else if (item.buttonname == 'Hide Answer') {
      item.buttonname = 'Show Answer';
    }
  }
}
