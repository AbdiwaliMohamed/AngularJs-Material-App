angular.module("myApp")
.controller("appCtrl",function ($mdDialog,$scope,$rootScope,$state,$timeout,$interval) {
    $scope.mobiles=[
        {name:"Samsung Note 10",price:75000,quan:12,img:"img/ph1.png",img1:"img/1.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I Phone 11",price:8000,quan:5,img:"img/ph2.png",img1:"img/2.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Huawei P10",price:35000,quan:6,img:"img/ph3.png",img1:"img/3.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I phone 7s",price:18000,quan:2,img:"img/ph4.png",img1:"img/4.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung J7",price:12000,quan:2,img:"img/ph1.png",img1:"img/5.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Lg prime",price:5000,quan:3,img:"img/ph2.png",img1:"img/6.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"techno",price:6000,quan:10,img:"img/ph3.png",img1:"img/1.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Grand Prime +",price:3000,quan:9,img:"img/ph4.png",img1:"img/2.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Note 10",price:75000,quan:12,img:"img/ph1.png",img1:"img/3.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I Phone 11",price:8000,quan:5,img:"img/ph2.png",img1:"img/4.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Huawei P10",price:35000,quan:6,img:"img/ph3.png",img1:"img/5.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I phone 7s",price:18000,quan:2,img:"img/ph4.png",img1:"img/6.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung J7",price:12000,quan:2,img:"img/ph1.png",img1:"img/1.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Lg prime",price:5000,quan:3,img:"img/ph2.png",img1:"img/2.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Note 4",price:6000,quan:10,img:"img/ph3.png",img1:"img/3.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Grand Prime +",price:3000,quan:9,img:"img/ph4.png",img1:"img/4.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "}

    ];
    $scope.fashions=[
        {name:"T-shirt",price:18000,quan:2,img:"img/a3.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Shirt",price:9000,quan:8,img:"img/ht.jpg", img1:"img/g3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Top",price:3000,quan:9,img:"img/a7.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Jaket",price:3000,quan:9,img:"img/a2.png", img1:"img/g2.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"T-shirt",price:18000,quan:2,img:"img/a3.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Shirt",price:9000,quan:8,img:"img/ht.jpg", img1:"img/g3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Top",price:3000,quan:9,img:"img/a7.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Jaket",price:3000,quan:9,img:"img/a2.png", img1:"img/g2.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "}

    ];
    $scope.footwears=[
        {name:"open wear",price:18000,quan:2,img:"img/mw1.png",img1:"img/mw3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"modern wear",price:3000,quan:9,img:"img/mw3.png",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Classic Wear",price:9000,quan:8,img:"img/mw1.png",img1:"img/mw3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:3000,quan:9,img:"img/d1.jpg",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"open wear",price:18000,quan:2,img:"img/mw1.png",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:18000,quan:2,img:"img/d1.jpg",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"modern wear",price:3000,quan:9,img:"img/mw3.png",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Classic Wear",price:9000,quan:8,img:"img/mw1.png",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:3000,quan:9,img:"img/d1.jpg",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"open wear",price:18000,quan:2,img:"img/mw1.png",img1:"img/mw3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"modern wear",price:3000,quan:9,img:"img/mw3.png",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Classic Wear",price:9000,quan:8,img:"img/mw1.png",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:3000,quan:9,img:"img/d1.jpg",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "}


    ];
    $scope.Collections=[
        {name:"Jaket",price:3000,quan:9,img:"img/a2.png", img1:"img/g2.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"T-shirt",price:18000,quan:2,img:"img/a3.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"open wear",price:18000,quan:2,img:"img/mw1.png",img1:"img/mw3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},

        {name:"Samsung Note 10",price:75000,quan:12,img:"img/ph1.png",img1:"img/1.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I Phone 11",price:8000,quan:5,img:"img/ph2.png",img1:"img/2.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"modern wear",price:3000,quan:9,img:"img/mw3.png",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Shirt",price:9000,quan:8,img:"img/ht.jpg", img1:"img/g3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Huawei P10",price:35000,quan:6,img:"img/ph3.png",img1:"img/3.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I phone 7s",price:18000,quan:2,img:"img/ph4.png",img1:"img/4.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung J7",price:12000,quan:2,img:"img/ph1.png",img1:"img/5.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Top",price:3000,quan:9,img:"img/a7.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},

      {name:"Classic Wear",price:9000,quan:8,img:"img/mw1.png",img1:"img/mw3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:3000,quan:9,img:"img/d1.jpg",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"open wear",price:18000,quan:2,img:"img/mw1.png",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:18000,quan:2,img:"img/d1.jpg",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"modern wear",price:3000,quan:9,img:"img/mw3.png",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Classic Wear",price:9000,quan:8,img:"img/mw1.png",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:3000,quan:9,img:"img/d1.jpg",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"open wear",price:18000,quan:2,img:"img/mw1.png",img1:"img/mw3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"modern wear",price:3000,quan:9,img:"img/mw3.png",img1:"img/mw1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Classic Wear",price:9000,quan:8,img:"img/mw1.png",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Sport wear",price:3000,quan:9,img:"img/d1.jpg",img1:"img/d1.jpg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},

       {name:"Lg prime",price:5000,quan:3,img:"img/ph2.png",img1:"img/6.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"techno",price:6000,quan:10,img:"img/ph3.png",img1:"img/1.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Grand Prime +",price:3000,quan:9,img:"img/ph4.png",img1:"img/2.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Note 10",price:75000,quan:12,img:"img/ph1.png",img1:"img/3.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I Phone 11",price:8000,quan:5,img:"img/ph2.png",img1:"img/4.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Huawei P10",price:35000,quan:6,img:"img/ph3.png",img1:"img/5.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Apple I phone 7s",price:18000,quan:2,img:"img/ph4.png",img1:"img/6.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung J7",price:12000,quan:2,img:"img/ph1.png",img1:"img/1.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Lg prime",price:5000,quan:3,img:"img/ph2.png",img1:"img/2.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Note 4",price:6000,quan:10,img:"img/ph3.png",img1:"img/3.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Samsung Grand Prime +",price:3000,quan:9,img:"img/ph4.png",img1:"img/4.jpeg",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"T-shirt",price:18000,quan:2,img:"img/a3.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Shirt",price:9000,quan:8,img:"img/ht.jpg", img1:"img/g3.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
        {name:"Top",price:3000,quan:9,img:"img/a7.png", img1:"img/g1.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "},
      {name:"Jaket",price:3000,quan:9,img:"img/a2.png", img1:"img/g2.png",
            desc:"We have an interval that changes the color of the button from red to blue themes, Open the dialog to see the theme being inherited to the dialog and any component inside "}

        ]
    $scope.basket=[];
    $scope.actives = 0
    $scope.active = 'active'
    $scope.animation = 'animated bounceOutLeft delay-1s'
    $scope.showAdvanced = function(ev,product) {
        $scope.selected=product;
        $rootScope.disp='block'
        $mdDialog.show({
            scope:$scope,
            preserveScope:true,
            templateUrl: 'template/products.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,





    })

        $scope.Cart =function () {
            name = $scope.selected.name
            img = $scope.selected.img
            price = $scope.selected.price
            var x = prompt("Enter the quantity of " + name)
            if (x) {
                x = parseFloat(x)
                $scope.basket.push({
                    name: name,
                    price: price,
                    qty: x,
                    img: img
                })

                    $rootScope.hidethis='fadeOutUp'
                    $timeout(function () {
                            $rootScope.hidethis='';

                    },3000)


            }








            }
            }







        //function DialogController($scope, $mdDialog) {
        //     $scope.hide = function ($scope, $mdDialog) {
        //         $mdDialog.hide();
        //     };





    $scope.cancel = function () {

        $mdDialog.cancel()

    };
    $interval(function () {
        if ($scope.actives < 2) {
            $scope.actives++
        }
        else {
            $scope.actives = 0
        }
    }, 5000)

})
    .controller("forumCtrl",function ($scope,$rootScope) {
        $scope.emps=[
            {
                name:"Ali",title:"Fullstack",address:"out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.",
                img:"img/female.jpg"}
        ]

    })
       .controller("contactCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {
           $scope.actives=0
           $scope.active='active'
           $scope.animation='animated bounceOutLeft delay-1s'
           $interval(function () {
               if ($scope.actives<2){
                   $scope.actives++
               }
               else {
                   $scope.actives=0
               }
           },1000)
       })

.controller("StoreCtrl",function ($scope,$rootScope,$mdDialog,$interval) {





})
