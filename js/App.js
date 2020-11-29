angular.module("myApp",["ngMaterial","ui.router","mds"])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    main:{
                        templateUrl:"template/main.html",
                        controller:"appCtrl"
                    }
                }
            })
            .state("app.home",{
                url:"/home",
                views:{
                    sub:{
                        templateUrl:"template/home.html",

                    }
                }
            })
            .state("app.store",{
                url:"/store",
                views:{
                    sub:{
                        templateUrl:"template/store.html",
                        controller:"StoreCtrl"
                    }
                }
            })
            .state("app.forum",{
                url:"/forum",
                views:{
                    sub:{
                        templateUrl:"template/forum.html",
                        controller:"forumCtrl"
                    }
                }
            })
            .state("app.contact",{
                url:"/contact",
                views:{
                    sub:{
                        templateUrl:"template/contact.html",
                        controller:"contactCtrl"
                    }
                }
            })

        $urlRouterProvider.otherwise("/app/home")
    })


    .filter("filter1",function ($rootScope) {
        return function (Collections,min1,max1) {
            var out = []
            if (!min1 || !max1)
                return Collections
            else {
                Collections.forEach(function (Collection) {
                    if (Collection.price >=min1 && Collection.price<= max1)
                        out.push(Collection)
                })
            }
            return out


        }
    })
    .filter("filter2",function ($rootScope) {
    return function (fashions,min2,max2) {
        var out = []
        if (!min2 || !max2)
            return fashions
        else {
            fashions.forEach(function (fashion) {
                if (fashion.price >=min2 && fashion.price<= max2)
                    out.push(fashion)
            })
        }
        return out


    }
})
    .filter("filter3",function ($rootScope) {
    return function (footwears,min3,max3) {
        var out = []
        if (!min3 || !max3)
            return footwears
        else {
            footwears.forEach(function (footwear) {
                if (footwear.price >=min3 && footwear.price<= max3)
                    out.push(footwear)
            })
        }
        return out


    }
})
    .filter("filter4",function ($rootScope) {
    return function (mobiles,min,max) {
        var out = []
        if (!min || !max)
            return mobiles
        else {
            mobiles.forEach(function (mobile) {
                if (mobile.price >=min && mobile.price<= max)
                    out.push(mobile)
            })
        }
        return out


    }
})





