# Margin collapsing 
occur only for vertical margins,adjacent elements no collapsing for horizontal case.Happens only for block elements because for inline elements we cannot apply vertical margins.Highest margins between the elements win when it comes to defining distance between the elements.
#### example

```
h1{
margin:0 0 20 0;
}
h2{
margin:50px 0 0 0;
}

```
