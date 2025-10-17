var productnameinput=document.getElementById("user name")
var productpriceinput=document.getElementById("product price")
var productcategoryinput=document.getElementById("floatingSelect")
var productcescriptioninput=document.getElementById("product cescription")
var productimageinput=document.getElementById("product image")
var defaultoption=document.getElementById("defaultoption")
var productdisplay=document.getElementById("productdisplay")


var productlist=[]
function addProduct()
{
    var product=
    {
        productname:productnameinput.value,
        productprice:productpriceinput.value,
        productcategory:productcategoryinput.value,
        productdescription:productcescriptioninput.value,
        productimage:productimageinput.files[0].name,
    }
    productlist.push(product)
    console.log(productlist)
    display()
    resetproduct()
}

function resetproduct()
{
    productnameinput.value=null;
    productpriceinput.value=null;
    defaultoption.selected=true;
    productcescriptioninput.value=null;
    productimageinput.value=null;
}

function display()
{
    var productstr=``;
    for(var i=0 ; i<productlist.length ; i++)
    {
        productstr+=`<div class="col">
                            <div class=" border shadow-sm py-3 px-3">
                                <div class="img">
                                    <img class="w-100 h-100 object-fit-contain" src="./images/${productlist[i].productimage}" alt="">
                                </div>
                                <h3>${productlist[i].productname}</h3>
                                <p class="text-secondary">${productlist[i].productdescription}</p>
                                <p><span class="fw-bold">category:</span> ${productlist[i].productcategory}</p>
                                <div class="d-flex justify-content-between">
                                    <p>${productlist[i].productprice} EGP</p>
                                    <div>
                                        <i class="fa-solid fa-trash-can text-danger"></i>
                                        <i class="fa-solid fa-pen-to-square text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }
        productdisplay.innerHTML=productstr
}














/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>ّ
    
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/all.min.css">
</head>
<body>
    
    <div class="w-75 mx-auto py-5">
        <div class="form-floating mb-3 ">
            <input type="text" class="form-control border-0 border-bottom rounded-0" id="user name" placeholder="name@example.com">
            <label for="user name">product name</label>
        </div>

        <div class="form-floating mb-3 ">
            <input type="number" class="form-control border-0 border-bottom rounded-0" id="product price" placeholder="name@example.com">
            <label for="product price">product price</label>
        </div>
        
        <div class="form-floating">
        <select id="floatingSelect" class="form-select border-0 rounded-0 border-bottom" id="floatingSelect" aria-label="Floating label select example">
            <option  id="defaultoption"  selected disabled hidden>choose product category</option>
            <option>mobaile phone</option>
            <option>laptop</option>
            <option>camera</option>
            <option>printer</option>
            <option>TV</option>
        </select>
        <label for="floatingSelect">Works with selects</label>
        </div>

        <div class="form-floating mb-3 mt-2 ">
            <textarea  class="form-control border-0 border-bottom rounded-0" id="product cescription" placeholder="name@example.com"></textarea>
            <label for="product cescription">product cescription</label>
        </div>

        <div class="form-floating mb-3 ">
            <input type="file" class="form-control border-0 border-bottom rounded-0" id="product image" placeholder="name@example.com">
            <label for="product image">product image</label>
        </div>
        
        <button onclick="addProduct()" class="btn btn-primary"> Add Product</button>
    </div>

    <div class="container mb-5">
        <div id="productdisplay" class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-5"> 
            
        </div>
    </div>
    
    <script src="./js/bootstrap.bundle.min.js"></script>
    <script src="./index.js"></script>
</body>
</html>*/





// .body
// {
//     font-family: "Prompt", sans-serif;
// }

// .form-control:focus,
// .form-select:focus
// {
//     box-shadow: none !important;
//     border-color: darkcyan !important;
// }
// .fa-trash-can:hover
// {
//     animation: fa-shake 2s linear;
// }
// div.img 
// {
//     height: 150px;
//     overflow: hidden;
// }
