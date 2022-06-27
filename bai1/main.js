function square(){
    console.log();
    var edge = $('#edge').val();
    var perimeter = edge * 4;
    var area = edge * edge;
    console.log(perimeter, area);
    if (isNaN(edge) || edge<0){
        alert("error")
    }
    else{   
        document.getElementById("perimeter").innerHTML = "Perimeter of square is: " + perimeter;
        document.getElementById("area").innerHTML = "Area of square is: " + area;
    }
}
function circle(){
    const PI = 3.14;
    var radius =parseInt(document.forms["formcircle"]["radius"].value);
    var perimetercircle = 2 * radius * PI; //magic number
    var areacrircle = radius * radius * PI;
    if (isNaN (radius) || radius < 0){
        alert("error")
    }
    else{       
        document.getElementById("perimetercircle").innerHTML = "Perimeter of circle is: " + perimetercircle;
        document.getElementById("areacrircle").innerHTML = "Area of circle is: " + areacrircle;
    }
}
function triangle() {
    var a = parseInt(document.forms["formtriangle"]["a"].value);
    var b = parseInt(document.forms["formtriangle"]["b"].value);
    var c = parseInt(document.forms["formtriangle"]["c"].value);
    var P = (a + b + c) / 2;
    var perimetertriangle = a + b + c;
    var areatriangle = Math.sqrt(P * (P - a) * (P - b) * (P - c))
    if (isNaN(a) ||isNaN(b) || isNaN(c) || a <0 || b <0 || c < 0){
        alert("error")       
    }
    
    else{
        document.getElementById("perimetertriangle").innerHTML = "Perimeter of triangle is: " + perimetertriangle;
        document.getElementById("areatriangle").innerHTML = "Area of triangle  is: " + areatriangle;
        }
}
function triangle() {
    var a = parseInt(document.forms["formtriangle"]["a"].value);
    var b = parseInt(document.forms["formtriangle"]["b"].value);
    var c = parseInt(document.forms["formtriangle"]["c"].value);
    var P = (a + b + c) / 2;
    var perimetertriangle = a + b + c;
    var areatriangle = Math.sqrt(P * (P - a) * (P - b) * (P - c))
    if (isNaN(a) ||isNaN(b) || isNaN(c) || a <0 || b <0 || c < 0){
        alert("error")       
    }
    
    else{
        document.getElementById("perimetertriangle").innerHTML = "Perimeter of triangle is: " + perimetertriangle;
        document.getElementById("areatriangle").innerHTML = "Area of triangle  is: " + areatriangle;
        }
}
function trapezium(){
    var a =parseInt(document.forms["formtrapezium"]["a"].value);
    var b =parseInt(document.forms["formtrapezium"]["b"].value);
    var c =parseInt(document.forms["formtrapezium"]["c"].value);
    var d =parseInt(document.forms["formtrapezium"]["d"].value);
    var h =parseInt(document.forms["formtrapezium"]["h"].value);
    var perimetertrapezium = a + b + c + d ;
    var areatrapezium = (a + b) * h / 2;
    if (isNaN(a) ||isNaN(b) || isNaN(c) || isNaN(h) ||a<0 || b<0 || c<0 ||d<0 || h<0){
        alert("lỗi")     
    }
    else{
        document.getElementById("perimetertrapezium").innerHTML = "Perimeter of trapezium is: " +perimetertrapezium;
        document.getElementById("areatrapezium").innerHTML = "Area of trapezium  is: " +areatrapezium;
        }
}
