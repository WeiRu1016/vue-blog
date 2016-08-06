export default (app) => {
    app.map({
        "*":{
            name: "404",
            component:(resolve)=> {
                require(["./view/404"],resolve)
            }
        },
        "/":{
            name: "index",
            component:(resolve)=> {
                require(["./view/index"],resolve)
            }
        },
        "/article/:id":{
            name: "article",
            component:(resolve)=> {
                require(["./view/article"],resolve)
            }
        },
        "/login":{
            name: "login",
            component:(resolve)=> {
                require(["./view/login"],resolve)
            }
        },
        "/admin":{
            name: "admin",
            component:(resolve)=> {
                require(["./view/admin"],resolve)
            },
            subRoutes:{
                "/":{
                    name: "admin-index",
                    component:(resolve)=> {
                        require(["./view/admin-index"],resolve)
                    }
                },
                "/:id":{
                    name: "admin-article",
                    component:(resolve)=> {
                        require(["./view/admin-article"],resolve)
                    }
                },
                "/add":{
                    name: "add",
                    component:(resolve)=> {
                        require(["./view/add"],resolve)
                    }
                }
            }
        }
    })
}