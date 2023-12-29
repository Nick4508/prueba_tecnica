
# diccionario = {
#     Ean_value : {
#         productname : value , 
#         query_data : value,
#         diferent_market : values,
#         price_range : value
#     }
# }
# tomando la pregunta uno como query, el resultado es una lista de tuplas y las tuplas son :
#data = (Product_name, Product_Sku, Product_Ean, Market_name,Product_price)
def agrupar(list_data):
    lista = []
    diccionary = {}
    for i in list_data:
        name, sku, ean, market, price = i
        if ean not in diccionary:
            data = { 
                "product_name" : name,
                "query_data" : [[market,sku,price]],
                "different_market" : {market : 1}, 
                "price_range" : [price]
                }
            diccionary[ean] = data
        else:
            diccionary[ean]["query_data"].append([market,sku,price])
            diccionary[ean]["different_market"][market] = 1
            diccionary[ean]["price_range"].append(price)
            
    for key,value in diccionary.items():
        diccionary[key]["different_market"][market] = len(diccionary[key]["different_market"])
        diccionary[key]["price_range"]= max(diccionary[key]["price_range"]) - min(diccionary[key]["price_range"])

        lista.append({key,value})

    return lista