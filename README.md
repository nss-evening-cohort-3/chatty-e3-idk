# IDK Chatty Group Project

### Description:  
Our group project was building our own, very basic, version of Slack. We will be using event handlers, IIFEs, DOM manipulation, CSS manipulation, and XHRs to complete our mission.

### Contributors: 
-[Katye Russell](https://github.com/complikatyed)  
-[Scott Schaffer](https://github.com/scottpschaffer)   
-[Bradley Guthrie](https://github.com/guthb)-- Team Leader


### Setup

You will need a simple web server to host this, Node.js worked well for us:
1. For Macintosh systems, at the termial promt: ``` $ npm install http-server -g ```  
1. at the prompt make a directory for hosting ``` $ mkdir IDK  
1. Change to the directory you plan to host the application ``` $ cd IDK/ ```  
1. Now start your web server ```` http-server -p ```  

#### ScreenShot of Completed Project ![Screenshot](idkChatty.png)

### Acomplishments met
Only requirements were met, no bonus items were attempted.

## Requirements for the effort

Build to [simple wireframe](https://app.moqups.com/chortlehoort/uGBbLbK46Y/view/page/a9d5cd7bf) for this application on Moqups.com. You can make your final interface as fancy as you like, but keep the general layout similar to the wireframe.

### Navigation bar

1. Create an element to serve as the navigation bar for your application.
1. Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
1. Create a input field for a user to enter in a message.
1. Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
1. When return key is detected, you'll create a new message (*see details below*).
1. Create a button to clear all messages.
1. When the user clicks the clear messages button, all current chat messages should be removed from the application.
1. If there are no messages, then the clear messages button should be disabled (*see example above*).
1. The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.

### Options

1. Create two checkboxes below the message input field. One labeled "Dark theme" and the other labeled "Large text".
1. When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
1. If the user unchecks the box, the background color should change back to white with black text for messages.

### Messages

1. When the user presses the return key in the message field, create a `<div>` element in the DOM, below the input field that will hold all messages as they get created.
1. The message should have a button displayed after it with the text "Delete" inside of it.
1. When the delete button next to a message is clicked, only that message should be removed from the DOM.
1. When the page is first loaded, you must load 5 messages from a local JSON file and pre-fill the message area with those messages.

### Modular Code

Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be `Chatty`.

1. One IIFE should load the JSON file and returns the array of objects.
1. One IIFE should accept an element `id`, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.
1. One IIFE should accept a message element `id` and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

## Bonus criteria 

For you overachievers, once you've completed the basic criteria, take a stab at these.

### Multiple JSON files

Instead of having one JSON file with five messages in it, break each message into its own JSON file. How do you handle loading them in succession?

### Editing

1. Let users edit an existing message. Add an edit button next to the delete button that, when clicked, will take the message and put it back in the message input at the top.
1. Once user edits the message and presses the return key again, the message text in the list should be updated.

### Custom themes

1. Add a button/link to the UI labeled "Change Theme".
1. Remove the existing elements for changing the theme.
1. When user click on Change Theme element, show a Bootstrap modal dialog box.
1. Inside the modal, show two color picker fields - one for background color and one for font color.
1. Add a *Save* and *Cancel* button to modal.
1. When user clicks *Save* apply the chosen colors.

### Multiple users

1. Create an object in your JavaScript that holds an array of names (*see example below*).
1. Next to the message input box, there should be a radio button group for each name in the list.
1. When a user enters a message, it should be prepended with the chosen user's name, in bold text.
1. Keep in mind that this will likely change the structure of your JSON file since the pre-loaded messages have to have this information on them.

```js
// User object
var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"];
};
```

### Message limit

1. Only show the last 20 messages.

### Timestamp

1. Put a timestamp on each message.
1. Again, this will change the structure of your JSON file.
