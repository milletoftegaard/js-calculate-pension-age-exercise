# Exercise 6: Using `Built-in functions in javaScript`


### Task: How to fork a repository on GitHub.com

1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.

2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.

3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.

4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.


## JavaScript Task:

1. In this exercise, the HTML and CSS are provided to you as index.html and css/style.css.
Note: You should not modify the css/style.css file; focus only on the JavaScript functionality.


2. On the HTML page (index.html), locate the button:
   ```html
    <button type="button" onclick="">Find din pensionsalder</button>
   ```
   The `onclick` attribute is currently empty.

3. Edit the HTML page and manually add the `function` name `calculatePension()` inside the `onclick attribute`.
This ensures the button will call the `calculatePension()` function when clicked. 

4. Link to the JavaScript file `js/script.js` from the provided HTML.

5. Ensure `"use strict"` is at the top of your script.

6. In the script.js file, create a JavaScript function named calculatePension():
   ```javaScript
   calculatePension() {
    // function logic here
   }
   ``` 

7. Inside the `calculatePension function`:
Create a variable named `birthdateInput` using `const` to get the value of the `<input>` element with `id="birthdate"` using `document.getElementById`

8. Create another variable named `resultParagraphElem` using `const` to access the `<p>` element with `id="result"` for displaying the output.

9. Set the content of the variable `resultParagraphElem` to an empty string like this:
    ```javaScript
    resultParagraphElem.textContent = "";
    ```
10. Convert the previous variable named `birthdateInput` to a date object like this:
    ```javaScript
        const birthdate = new Date(birthdateInput.value);
    ```

11. Use isNaN() to check if the entered date is invalid.
If the date is invalid, display the message "Indtast en gyldig fødselsdato." in the <p> element. Here is how you should do it:
    ```javaScript
        if (isNaN(birthdate)) {
            resultParagraphElem.textContent = "Indtast en gyldig fødselsdato.";
            return;
        }
    ```

12. Create a variable name `retirementAge` using `let` and set it to an empty string.

13. Add if...else if statements in the calculatePension function to determine the retirement age based on the date ranges from the schema below.
Here is an example on how you start your if statements:
    ```javaScript
    if (birthdate < new Date('1955-06-30')) {
      retirementAge = 66;
    } else if (birthdate <= new Date('1962-12-31')) {
      retirementAge = 67;
    } ...
    ```


### Pensionsoversigts-skema

| Fødselsdato                        | Folkepensionsalder |
|------------------------------------|--------------------|
| Før 30. juni 1955                  | Du har opnået din folkepensionsalder |
| 1. juli 1955 – 31. december 1962   | 67 år              |
| 1. januar 1963 – 31. december 1966 | 68 år              |
| 1. januar 1967 – 31. december 1970 | 69 år              |
| 1. januar 1971 – 31. december 1974 | 70 år              |
| 1. januar 1975 – 31. december 1978 | 71 år              |
| 1. januar 1979 – 31. december 1982 | 72 år              |
| 1. januar 1983 – 30. juni 1987     | 72,5 år            |
| 1. juli 1987 – 31. december 1991   | 73 år              |
| 1. januar 1992 – 30. juni 1996     | 73,5 år            |
| 1. juli 1996 eller senere          | 74 år              |



14. Finaly make an `if else statement` that display the appropriate message in the `<p>` element. Here is how to do it:
    ```javaScript 
        if (retirementAge <= 66) {
            resultParagraphElem.textContent = `Du har opnået din folkepensionsalder.`;
        } else {
            resultParagraphElem.textContent = `Du kan gå på pension ${retirementAge} år.`;
        }
    }
    ```

15. Open Go Live in your VS Code editor and check that the content has been updated. 

