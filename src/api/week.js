import http from "@utils/http";

//week_choice
export const week_choice = (city_id=140,page=0)=>http.get("/api/hub/home/v1/web/week_choice.json",{city_id,page}) 
//菜品类型
export const goodsTypes = ()=>http.get("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9MTg2ZTliNTdjZjYwODE3MTVmNjgyNzIwYjZmZGY3N2UmMjAxOTA4MjYxMTAw.json");


//
export const goodsList = (category_id,city_id,sort=1,page=0)=>http.get("/api/4/tab/category_product_list.json",{
    category_id,
    sort,
    from_id:0,
    city_id,
    page,
}) 


export const topApi = ()=>http.get("/api/4/tab/sub_category.json",{
    category_id: 4,
    city_id: 140,
    from_id: 0,
})
