# Advanced CSS and SASS
Udemy Course : Advanced CSS

Pillars of good HTML and CSS

1. Responsive Design 
   1. Fluid layouts 
   2. Media queries 
   3. Responsive Images 
   4. Correct Units 
   5. Desktop-first vs mobile-first
<br></br>
2. Maintainable & Scalable Code
   1. Clean
   2. Easy-to-understand
   3. Supports Growth
   4. Reusable
   5. Skillfully Implemented
      1. File Organization
      2. Class Naming
      3. HTML Structure
<br></br>
3. Web Performance
   1. Less HTTP Requests
   2. Less Code
   3. Compress Code
   4. Use a CSS Preprocessor
   5. Less Images
   6. Compress Images




#CSS Notes

                                |   CSS Rule    |

```
     SELECTOR                  DECLARATION BLOCK
     
.my-class {
    color: blue;    <-------------   Declaration
    text-align: center;     <-----   Declaration
    font-size: 20px;
}
```

    .my-class   ----------  Selector\
    'The Rest'  ----------  Declaration Block

### CSS PARSING
###### Importance :  First Check

1. User`!important` declarations
2. Author `!important` declarations
3. Author Declarations
4. User Declarations
5. Default Browser Declarations

###### Specificity : If the importance is the same

1.  Inline Styles
7. IDs
8. Classes, Pseudo-Classes, Attribute
9. Elements, Pseudo-Elements

###### Source Order :  If Importance and Specificity are both the same

1. The last declaration in the code will override all other declarations and will be applied


### 