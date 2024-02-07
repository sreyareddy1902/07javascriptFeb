/*---starpattern1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        document.write("*")
    }
    document.write("<br>")
}
----*/

/*---starpattern2
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if(i==1 || j==1 || i==5 || j==5)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
----*/

/*---starpattern3
let star=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star++
}
------*/

/*----starpattern4
let star=1,space=4
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star++
    space--
}
----*/

/*---starpattern5
let star=5
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star--
}
----*/

/*----starpattern6
let star=5,space=0
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star--
    space++
}
------*/

/*----starpattern7
let star=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        if(j==1 || i==5 || i==j)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
    star++
}
----*/

/*----starpattern8
let star=1,space=3
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star=star+2
    space--
}
----*/

/*----starpattern9
let star=7,space=0
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star=star-2 
    space++
}
------*/

/*------starpattern10
let star=1,space=3
for(let i=1;i<=7;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<4)
    {
        star=star+2;
        space--;
    }
    else
    {
        star=star-2
        space++
    }
    document.write("<br>")
}
----*/

/*----starpattern11
let star=1,space=3
for(let i=1;i<=7;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<4)
    {
        star++
        space--
    }
    else
    {
        star--
        space++
    }
    document.write("<br>")
}
----*/


/*---starpattern12
let star=1
for(let i=1;i<=7;i++)
{
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<4)
    {
        star++
    }
    else
    {
        star--
    }
    document.write("<br>")
}
-----*/

/*----starpattern13
let star=5,space=0
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<3)
    {
        star=star-2
        space++
    }
    else
    {
        star=star+2
        space--
    }
    document.write("<br>")
}
---*/

/*-------starpattern14
let star=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=3;j++)
    {
        if(i>=2 && i<=4)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<3)
    {
        star++
    }
    else
    {
        star--
    }
    document.write("<br>")
}
-----*/

/*----starpattern15
let star=1,space=2
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<3)
    {
        star++
        space--
    }
    else
    {
        star--
        space++
    }
    for(let j=1;j<=3;j++)
    {
        if(i>=2 && i<=4)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
------*/

/*---starpattern16
let star=1
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=star;j++)
    {
        if(i==j)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
    star++
}
---*/

/*---starpattern17
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if(i==j || (i+j)==6)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
----*/

/*---starpattern18
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=4;j++)
    {
        if(i==1 || j==1 || j==4 || i==3)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
----*/

/*---starpattern19
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=4;j++)
    {
        if(i==1 || j==1 || i==3 )
        {
            document.write("*")
        }
        else if(j==4 && i<=3)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
---*/

/*----starpattern20
let star=1,space=2
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    for(let j=1;j<=3;j++)
    {
        if(i>=2 && i<=4)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<3)
    {
        star++
        space--
    }
    else
    {
        star--
        space++
    }
    document.write("<br>")
}
-----*/






