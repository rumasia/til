# Margin collapsing 
Occur only for vertical margins,adjacent elements no collapsing for horizontal case.Happens only for block elements because for inline elements we cannot apply vertical margins.Highest margins between the elements win when it comes to defining distance between the elements.
#### example

```
h1{
margin:0 0 20px 0;
}
h2{
margin:50px 0 0 0;
}

```
<span style="color:blue">The botom margin for h1 is 20px and top margin for h2 is 50px it seems that the distance between two headings is 70px because 20px + 50px =70px but the actual distance is 50px due to margin collapsing</span>

