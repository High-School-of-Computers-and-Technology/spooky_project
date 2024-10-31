

---

# Pumpkin Customization Assignment 🎃

In this assignment, you’ll extend the pumpkin project by adding spooky eyes and a control to change the background color of the page using JavaScript. This will give you practice with HTML, CSS, and JavaScript to create interactive web elements.

## Objectives

1. **Add spooky eyes** to the pumpkin using CSS.
2. **Add a background color picker** to change the `body` background color using JavaScript.

## Instructions

1. **Set up**:
   - Use the provided files: `index.html`, `styles.css`, and `script.js`.
   - If you haven’t already, make sure to open these files in your code editor.

2. **Add Spooky Eyes**:
   - In `styles.css`, add two new `div` elements inside the pumpkin for the eyes.
   - Use CSS to style the eyes with the following guidelines:
     - Place the eyes inside the pumpkin (`.pumpkin` div).
     - Make them appear “spooky” by adjusting their size, shape, and position.
     - Use any CSS properties you think would make the eyes look spooky (such as shadows or glowing effects).
  
3. **Add Background Color Picker**:
   - In `index.html`, add an additional `<input type="color">` element below the pumpkin container, with an `id` of `bgColorPicker` and a label that says "Pick Background Color."
   - In `script.js`, write JavaScript to make this color picker change the background color of the `body`:
     - Select the color picker by its `id` (`bgColorPicker`).
     - Add an `input` event listener to the color picker.
     - Update the `body` background color dynamically as the user picks a new color.

4. **Testing**:
   - Open `index.html` in your browser.
   - Verify that you can change the pumpkin’s color, the `body` background color, and see the spooky eyes on the pumpkin.

## Example Solution

Here’s what your code should look like for each file:

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Pumpkin</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="pumpkin-container">
        <div class="stem"></div>
        <div class="pumpkin" id="pumpkin">
            <!-- Add spooky eyes here -->
            <div class="eye left-eye"></div>
            <div class="eye right-eye"></div>
        </div>
    </div>
    <label for="colorPicker">Pick Pumpkin Color: </label>
    <input type="color" id="colorPicker" value="#FFA500">
    
    <!-- New Background Color Picker -->
    <label for="bgColorPicker">Pick Background Color: </label>
    <input type="color" id="bgColorPicker" value="#333333">

    <script src="script.js"></script>
</body>
</html>
```

### `styles.css`

```css
/* Existing pumpkin and stem styling from previous example */

.eye {
    width: 20px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 50px;
}

.left-eye {
    left: 50px;
    transform: rotate(-10deg);
}

.right-eye {
    right: 50px;
    transform: rotate(10deg);
}

/* Additional styling for a spooky effect */
.eye::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 5px;
}
```

### `script.js`

```javascript
const pumpkin = document.getElementById('pumpkin');
const colorPicker = document.getElementById('colorPicker');
const bgColorPicker = document.getElementById('bgColorPicker');

// Change pumpkin color
colorPicker.addEventListener('input', (event) => {
    pumpkin.style.backgroundColor = event.target.value;
});

// Change background color
bgColorPicker.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});
```

---

## Submission

Once you have completed the assignment:

- Commit Changes
- Look out for notifications of  HTML, CSS, and JavaScript files for review.
- Any required changes will be under issues

Good luck, and have fun making your pumpkin spooky! 🎃
