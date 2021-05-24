<?php

namespace App\Http\Controllers;
use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $data = Product::get();
        return response()->json($data);
    }

    public function store(Request $req){
        $products = new Product;

        $products->product_name = $req->product_name;
        $products->price = $req->price;
        $products->quantity = $req->quantity;

        $products->save();

        return response([
            'msg' => 'product save'
        ]);

    }

    public function show($id, Request $req){
        $data = Product::where('product_id', $id)
                        ->get();
        return response()->json($data);
    }

    public function edit($id, Request $req){
        $data = Product::where('product_id', $id)
                        ->get();

        if($data->count() == 0){
            return response([
                'msg' => 'wrong id'
            ]);
        };

        $updateData = Product::where('product_id', $id)->update(
            [
                'product_name' => $req->product_name,
                'price' => $req->price,
                'quantity' => $req->quantity,
            ]
        );

        return response([
            'msg' => 'prodyct Update'
        ]);


    }

    public function distroy($id){
        $data = Product::where('product_id', $id)
                        ->get();
        
        if($data->count() == 0){
            return response([
                'msg' => 'wrong id'
            ]);
        };

        Product::where('product_id', $id)->delete();

        return response([
            'msg' => 'prodyct delete'
        ]);

        
    }
}
