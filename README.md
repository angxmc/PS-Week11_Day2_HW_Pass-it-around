# PS-Week11_Day2_HW_Pass-it-around

## Requirements

- On the home page (get "/"), users should see:

"99 Bottles of beer on the wall" </br>
a link that says "take one down, pass it around" </br>
this should link to /98, where the number represents the number of bottles left.

- When a number is given in the url (get "/:number_of_bottles"), users should see:

The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.) </br>
a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.

- If there are 0 bottles left, do not show a link to "take one down"

Add a link to start over, which directs the user back to the home page.
